import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Cập nhật state để render fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log lỗi ra console hoặc gửi đến service
    console.error('Error caught by boundary:', error, errorInfo);
    // Chuyển hướng đến trang lỗi
    window.location.href = '/auth/404';
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI khi có lỗi
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h1>Đã xảy ra lỗi</h1>
          <p>Vui lòng thử lại hoặc liên hệ hỗ trợ.</p>
          <button 
            onClick={() => window.location.href = '/auth/404'}
            style={{
              padding: '10px 20px',
              backgroundColor: '#1677ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Đi đến trang lỗi
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrapper component không dùng hook nữa
const ErrorBoundaryWrapper = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default ErrorBoundaryWrapper; 