import {codes} from 'micromark-util-symbol/codes'
import {types} from 'micromark-util-symbol/types'
import {Construct, Tokenizer, State, TokenizeContext, Code} from 'micromark-util-types'
import {blankLine, thematicBreak} from 'micromark-core-commonmark'

export function tagList(options) {
  const tagListConstruct: Construct = {
    name: 'tagList',
    tokenize: tokenizeTagList
  };

  return {
    flow: {
      [codes.numberSign]: tagListConstruct
    },
    disable: {null: ['headingAtx']}
  }
}

type ListContainerState = Record<string, unknown> & {
  marker: Code,
  type: string,
  size: number
}

type TokenizeContextWithState = TokenizeContext & {
  containerState: ListContainerState
}

const tokenizeTagList: Tokenizer = function(effects, ok, nok) {
  const self = this as TokenizeContextWithState
  const tail = self.events[self.events.length - 1]
  let initialSize =
    tail && tail[1].type === types.linePrefix
      ? tail[2].sliceSerialize(tail[1], true).length
      : 0
  let size = 0


  const start : State = function(code) {
    const kind = types.listUnordered

    effects.enter(kind, {_container: true})
    effects.enter(types.listItemPrefix)
    return atMarker(code)
  }

  const atMarker : State = function(code) {
    effects.enter(types.listItemMarker)
    effects.consume(code)
    effects.exit(types.listItemMarker)
    self.containerState.marker = self.containerState.marker || code
    return effects.check(
      blankLine,
      // Can’t be empty when interrupting.
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    )
  }


  return start

}
