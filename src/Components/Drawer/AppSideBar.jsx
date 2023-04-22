import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { memo } from 'react';

const linksObj = [
    {
        linkTitle: 'Home',
        linkHref: 'dashboard',
        linkIcon: 'InboxIcon'
    },
    {
        linkTitle: 'Patient Registration',
        linkHref: 'patient-registration',
        linkIcon: 'MailIcon'
    },
];

function AppSideBar() {

    return (
        <List>
            {linksObj.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ display: "block" }}
                    component={Link} to={"/" + item.linkHref}
                >
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: 'open' ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: 'open' ? 3 : "auto",
                                justifyContent: "center",
                            }}
                        >
                           <NavigateNextIcon/>
                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        </ListItemIcon>
                        <ListItemText primary={item.linkTitle} sx={{ opacity: 'open' ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default memo(AppSideBar)