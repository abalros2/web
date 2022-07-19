import {ListItemText, MenuItem, Tooltip, Typography} from "@mui/material";
import React, {useContext} from "react";
import AppContext from "../../../context/AppContext";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    icon: {
        "& .icon": {
            top: '14px',
            left: '30px',
        },
        "& .background": {
            left: '0px',
            top: '2px',
            filter: "drop-shadow(0 0 0 gray)"
        }
    },
    item: {
        '& li': {
            minHeight: '50px !important',
            maxHeight: '50px !important',
        }
    },
    text: {
        '& p': {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            paddingRight: "20px"
        }
    }
})

export default function FavoriteItem({index, marker}) {

    const classes = useStyles();

    const ctx = useContext(AppContext);

    function addFavoriteToMap(marker) {
        if (ctx.favorites.visibleMarker.current) {
            ctx.favorites.visibleMarker.prev = ctx.favorites.visibleMarker.current;
        }
        ctx.favorites.visibleMarker.current = marker;
        ctx.setFavorites({...ctx.favorites});
    }


    return <div className={classes.item}>
        <Tooltip title={marker.options.title} arrow>
            <MenuItem key={'marker' + index} sx={{ml: 2}} divider onClick={() => addFavoriteToMap(marker)}>
                <div className={classes.icon}
                     dangerouslySetInnerHTML={{__html: marker.options.icon.options.html + ''}}/>
                <ListItemText className={classes.text}>
                    <Typography variant="inherit">
                        {marker.options.title}
                    </Typography>
                </ListItemText>
            </MenuItem>
        </Tooltip>
    </div>
}