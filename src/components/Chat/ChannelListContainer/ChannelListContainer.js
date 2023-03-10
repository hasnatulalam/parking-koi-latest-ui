import React from 'react';

import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './ChannelListContainer.css'

import  ChannelSearch  from '../ChannelSearch/ChannelSearch';
import HospitalIcon from '../../assets/images/hospital.png'
import TeamChannelList from '../TeamChannelList/TeamChannelList';







const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
        
    </div>
);
const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)
const ChannelListContainer = () => {
    return (
        <>
          <SideBar/> 
          <div className="channel-list__list__wrapper">
          <CompanyHeader/>
          <ChannelSearch/>
          <ChannelList
         filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps) => (
            <TeamChannelList
            {...listProps}
            type='team'
            
            />
        )} 
          />
          </div>
        </>
    );
};

export default ChannelListContainer;