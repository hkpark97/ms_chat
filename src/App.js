import {ChatEngine} from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css'; 

const projectID = '7fbaabd6-a342-4dff-8c67-33f095c8274a';

const App = () => {

    if(!localStorage.getItem('username'))  //if not logged in

    return <LoginForm />

    return (
        <ChatEngine
        height="100vh"
        projectID="7fbaabd6-a342-4dff-8c67-33f095c8274a"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
};

export default App;