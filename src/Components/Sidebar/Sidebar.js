import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from '../SidebarChat/SidebarChat';

const Sidebar = () => {
    return (
        <>

            <div className="sidebar">
                <div className="sidebar__header">

                    <Avatar src="/Images/1605438796049.jpg" />

                    <div className="siderbar__headerRight">

                        <IconButton>
                            <DonutLargeIcon />
                        </IconButton>

                        <IconButton>
                            <ChatIcon />
                        </IconButton>

                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>

                    </div>

                </div>

                <div className="sidebar__search">
                    <div className="sidebar__searchContainer">

                        <SearchIcon />

                        <input type="text" placeholder='Search or start new chat' />

                    </div>
                </div>

                <div className="sidebar__chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
            </div>

        </>
    )
}

export default Sidebar