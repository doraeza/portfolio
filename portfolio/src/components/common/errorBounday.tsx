import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.hasError && this.state.hasError.toString()}
          <br />
        </details>
      </div>)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// import React, { useState, useEffect, ReactNode } from 'react';

  
// interface ErrorInfo {
//   componentStack: string;
// }

// interface ErrorBoundaryProps {
//   children: ReactNode;
// }

// const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {

//   const [hasError, setHasError] = useState<boolean>(false);
//   const [error, setError] = useState<Error | null>(null);
//   const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);



//   const handleError = (error: Error, errorInfo:ErrorInfo) => {
//     setHasError(true);
//     setError(error);
//     setErrorInfo(errorInfo);
//     // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
//     // logErrorToMyService(error, errorInfo);
//   };

//   useEffect(() => {
//     return () => {
//       setError(null);
//       setErrorInfo(null);
//     };
//   }, []);

//   if (hasError) {
//     // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
//     return <h1>Something went wrong.</h1>;
//   }

//   return children;
// };

// export default ErrorBoundary;