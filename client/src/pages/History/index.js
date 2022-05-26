import React from 'react';
import TimeLine from 'components/TimeLine';
import TimeLineMobile from 'components/TimeLineMobile';

import { useHistoryContext } from 'contexts/HistoryProvider';
import { useBreakPoint } from 'contexts/MuiThemeProvider';
import { useScrollContext } from 'contexts/ScrollProvider';
import { UPDATE_SCROLL, UPDATE_STARTEND } from 'contexts/actions';

import { useTheme, styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';

import './history.css';
function History(props) {
  const scrollIncrement = 300;
  const iconSize = { fontSize: '3rem' };

  const { history } = useHistoryContext();
  const [scrollContextState, setScrollContextState] = useScrollContext();

  const theme = useTheme();
  const breakpoint = useBreakPoint();

  // console.log('is mobile?', breakpoint);
  const handleClick = (e) => {
    if (!e.currentTarget.getAttribute('data-type')) return;

    if (e.currentTarget.getAttribute('data-type') === 'right') {
      if (
        scrollContextState.animValue - scrollIncrement <=
        scrollContextState.max
      ) {
        // set max
        setScrollContextState({
          animValue: scrollContextState.max,
          type: UPDATE_SCROLL
        });
        setScrollContextState({
          start: false,
          end: true,
          type: UPDATE_STARTEND
        });
        return;
      } else {
        setScrollContextState({
          animValue: scrollContextState.animValue - scrollIncrement,
          type: UPDATE_SCROLL
        });
      }
    }

    if (e.currentTarget.getAttribute('data-type') === 'left') {
      if (
        scrollContextState.animValue + scrollIncrement >=
        scrollContextState.min
      ) {
        setScrollContextState({
          animValue: scrollContextState.min,
          type: UPDATE_SCROLL
        });

        setScrollContextState({
          start: true,
          end: false,
          type: UPDATE_STARTEND
        });
      } else {
        setScrollContextState({
          animValue: scrollContextState.animValue + scrollIncrement,
          type: UPDATE_SCROLL
        });
      }
    }
  };

  const HistoryButton = styled(IconButton)(({ theme }) => ({
    '&:hover, &.Mui-focusVisible': {
      color: theme.palette.quinary.main + '80',
      backgroundColor: theme.palette.tertiary.main + '50'
    },
    '&& .MuiTouchRipple-root': {
      overflow: 'visible',
      bottom: '30%'
    }
  }));

  return (
    <section id="Journey">
      <div className="section-wrapper">
        <div className="history-title-container container">
          <div className=" history-name-wrapper section-name-wrapper">
            <h3 className="history-name section-name textRight">
              02-My Journey
            </h3>
          </div>
        </div>

        <div className="history-container container">
          {['md', 'sm', 'xs'].includes(breakpoint) ? (
            <div className="timeline-mobile-wrapper">
              <TimeLineMobile historyList={history} />
            </div>
          ) : (
            <>
              <div className="button-wrapper left-history">
                <HistoryButton
                  data-type="left"
                  onClick={handleClick}
                  sx={{ height: '50%' }}
                  color="senary"
                  size="large"
                >
                  <ArrowBackIcon sx={iconSize} />
                </HistoryButton>
              </div>

              <div className="history-scroll-wrapper">
                <TimeLine historyList={history} />
              </div>

              <div className="button-wrapper right-history">
                <HistoryButton
                  data-type="right"
                  onClick={handleClick}
                  color="senary"
                  sx={{
                    height: '50%',
                    '&& .MuiTouchRipple-rippleVisible': {
                      animationDuration: '1000ms'
                    }
                  }}
                  size="large"
                >
                  <ArrowForwardIcon sx={iconSize} />
                </HistoryButton>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default History;
