import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/admin');
        } catch (err) {
            setError('Failed to log in. Please check your credentials or ensure you are an authorized admin.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-page">
            <div className="login-card glass reveal-scale visible">
                <div className="login-header">
                    <img src="/assets/logo.jpg" alt="RCIC" className="login-logo" />
                    <h2 className="shimmer-text">Admin Login</h2>
                    <p>Enter your credentials to manage the RCIC platform.</p>
                </div>
                {error && <div className="login-error">{error}</div>}
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@rcic.rw"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>
                    <button disabled={loading} type="submit" className="login-submit-btn pulse-btn">
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                    <div className="login-footer">
                        <p>Authorized access only. Logging of activities is enabled.</p>
                        <a href="/" className="back-link">← Back to Site</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
