import React, {Component, ErrorInfo, ReactNode} from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: (error: Error) => ReactNode;
};

type ErrorBoundaryState = {
  error: Error | undefined;
};

/**
 * Fängt Render-Fehler ab, damit ein einzelnes kaputtes Rezept nicht die
 * ganze App lahmlegt. Zum Zurücksetzen die Boundary neu mounten, z.B. mit
 * einem `key`, der an den Pfad gebunden ist.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {error: undefined};

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {error};
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    const {error} = this.state;
    if (error === undefined) {
      return this.props.children;
    }
    if (this.props.fallback) {
      return this.props.fallback(error);
    }
    return <div className="page">
      <h1>Da ging etwas schief.</h1>
      <p>Dieses Rezept konnte nicht dargestellt werden.</p>
      <pre>{error.message}</pre>
    </div>;
  }
}
