import { useState } from 'react';
import axios from 'axios';

const projectID = '7fbaabd6-a342-4dff-8c67-33f095c8274a';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret':password };

        //username | password => chatEngine -> give messages
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
            // works out -> logged in
        }

        catch (err) {
            setError('Invalid input, please type again...');
        }
         // error -> try with another username...
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                        <span>Start Chatting</span>
                       
                        </button>
                    </div>
                    </form> 
                    
                    <h2 className="error">{error}</h2>        
            </div>
        </div>
    );
};

export default LoginForm;