import React, { useEffect, useState} from "react";

const TopNav = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [playerCount, setPlayerCount] = useState(null);

    /** Component to display current player count on Tranquility server and 
     * current time in UTC format.
     */
    useEffect(() => {
        const fetchUTCTime = setInterval(() => {
            const now = new Date();
            const hours = now.getUTCHours().toString().padStart(2, '0');
            const minutes = now.getUTCMinutes().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        }, 1000);

        return () => clearInterval(fetchUTCTime);
    }, []);

    /** Set interval to 5 min, turns out CCP doesn't like you querying the
     * servers every second to get the player count.
     */
    useEffect(() => {
        const fetchPlayerCount = setInterval(async () => {
            try {
              const response = await fetch('https://esi.evetech.net/latest/status/');
              if (!response.ok) {
                throw new Error('Failed to fetch');
              }
              const data = await response.json();
              setPlayerCount(data.players.toLocaleString("en-US"));
            } catch (error) {
              console.error('Error fetching player count:', error);
            }
        }, 300000);

        return () => clearInterval(fetchPlayerCount);
    }, []);

    return (
        <nav className="top-navbar">
            <img className="corp-logo" 
                src="https://images.evetech.net/corporations/98227740/logo?tenant=tranquility&size=64" 
                alt="DroidDrill">
            </img>
            <h1 className="title">DroidDrill Industry Dashboard</h1>
            <div className="current-time">Eve Time: {currentTime}</div>
            <div className="player-count">
                {playerCount !== null ? `Tranquility: ${playerCount}` : 'Fetching player count...'}
            </div>
            <button className="button"> Login </button>
        </nav>
    );
};

export default TopNav