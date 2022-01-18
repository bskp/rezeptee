import {codes} from 'micromark-util-symbol/codes'
import {headingAtxNew} from "/imports/api/heading-atx";

export function tagList(options) {
  return {
    //flow: {[codes.numberSign]: tagListConstruct},
    //flow: {[codes.numberSign]: {name: 'taglist', tokenize: tagListTokenize}},
    flow: {
      [codes.numberSign]: {name: 'tagList', tokenize: tagListTokenize}
      //[codes.numberSign]: headingAtxNew
    },
    disable: {null: ['headingAtx']}
  }
}

function tagListTokenize(effects, ok, nok) {
  const closing = [
    codes.carriageReturnLineFeed,
    codes.carriageReturn,
    codes.eof,
    codes.lineFeed,
    codes.space
  ]

  let tagLength = 0;
  let tagCount = 0;

  return startTagList

  function startTagList(code) {
    effects.enter('tagList')
    console.log("> tagList")
    return startTag(code)
  }

  function startTag(code) {
    if (code == codes.numberSign) {
      console.log("< # >")
      effects.enter('tagMarker')
      effects.consume(code)
      effects.exit('tagMarker')
    }

    console.log("> tag")
    effects.enter('tag')
    tagLength = 0;
    tagCount += 1;
    return insideTag
  }

  function insideTag(code) {
    if (closing.includes(code)) {
      return endTag(code);
    }

    tagLength += 1;
    effects.consume(code)

    return insideTag;
  }

  function endTag(code) {
    if (tagLength < 3) return nok(code);
    console.log("< tag")
    effects.exit('tag')

    return betweenTags(code)
  }

  function betweenTags(code) {
    if (code == codes.space) {
      effects.consume(code);
      return betweenTags
    }

    if (closing.includes(code)) {
      effects.consume(code);
      console.log("< tagList")
      effects.exit('tagList')
      return ok(code)
    }

    return ok(code)
  }
}
