import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/AddAlert';
import db from './firebases'




const Sidebar = () => {

const [channels, setChannels] = useState([])

useEffect(() => {
db.collections('rooms').onSnapShot(snapshot=>(
    setChannels(
        snapshot.doc.map(doc=>({
            id:doc.id,
            name: doc.data().name
        }))
    )
))
}, [])

  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
        <div className='sidebar__info'>
        <h2>Clever Programmer</h2>
        <h3>
            <FiberManualRecordIcon/>
            Rafeh Qazi
        </h3>
        </div>
        <CreateIcon/>
        </div>
        <SidebarOption Icon={InsertCommentIcon} title='Threads '/>
        {/* <SidebarOption Icon='' title='Youtube '/> */}
        <SidebarOption Icon={InboxIcon} title='Mentions & reactions'/>
        <SidebarOption Icon={DraftsIcon} title='Save items'/>
        <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser '/>
        <SidebarOption Icon={PeopleAltIcon} title='People & user groups'/>
        <SidebarOption Icon={AppsIcon} title='Apps '/>
        <SidebarOption Icon={FileCopyIcon} title='File browser'/>
        <SidebarOption Icon={ExpandLessIcon} title='Show less '/>
        <hr/>
        <SidebarOption Icon={ExpandMoreIcon} title='Channel '/>
        <hr/>
        <SidebarOption Icon={AddIcon} title=' Add Channel '/>

        {channels.map(channel=>(
            <SidebarOption title={channel.name} Icon={channel.id}/>
        ))}











    </div>
  )
}

export default Sidebar