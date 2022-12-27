import React from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie'
import ChannelContainer from '../ChannelContainer/ChannelContainer';
import ChannelListContainer from '../ChannelListContainer/ChannelListContainer';
import ChannelSearch from '../ChannelSearch/ChannelSearch';
import TeamChannelList from '../TeamChannelList/TeamChannelList';

const apiKey ='1226201'
const client = StreamChat.getInstance(apiKey)


const Stream = () => {
    return (
        <div className='Chat-wrapper'>
            <Chat client={client} theme="team-light">
               <ChannelListContainer></ChannelListContainer>
               <ChannelContainer></ChannelContainer>
               <ChannelSearch></ChannelSearch>
               <TeamChannelList></TeamChannelList>
               
            </Chat>
            
        </div>
    );
};

export default Stream;