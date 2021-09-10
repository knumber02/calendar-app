import React  from "react";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { IconButton, Toolbar, Typography, withStyles ,Tooltip} from "@material-ui/core";
import {DatePicker} from "@material-ui/pickers";
import * as styles from "./style.css";

const StyleDatePicker =withStyles({
    root:{marginLeft: 30}
})(DatePicker);
const StyledToolbar = withStyles({
    root: {padding: 0}
})(Toolbar);
const StyledTypography = withStyles({
    root: {margin: "0 30px 0 10px"}
})(Typography);

const Navigation = ({setNextMonth, setPreviousMonth, setMonth, month}) => {

    return (
        <StyledToolbar className={styles.nav}>
            <IconButton>
                <DehazeIcon />
            </IconButton>
            <img src="/images/calendar_icon.png" width="40" height="40" />
            <StyledTypography color="textSecondary" variant="h5" component="h1">
                カレンダー
            </StyledTypography>
            <Tooltip title="前の月"　placement="bottom">
                <IconButton size="small" onClick={setPreviousMonth}>
                    <ArrowBackIos />
                </IconButton>
            </Tooltip>
            <Tooltip title="次の月"　placement="bottom">
                <IconButton　size="small" onClick={setNextMonth}>
                    <ArrowForwardIos />
                </IconButton>
             </Tooltip>
            <StyleDatePicker
            value={month}
            onChange={setMonth}
            variant="inline"
            format="YYYY年M月"
            animateYearScrolling
            disableToolbar
            />
        </StyledToolbar>
    )
}
export default Navigation;