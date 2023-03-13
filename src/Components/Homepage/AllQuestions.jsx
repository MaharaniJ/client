import React from 'react';
import './css/Allquestion.css';
import {Link} from 'react-router-dom';
import { Avatar } from '@mui/material';

function AllQuestions() {
  return (
    <div className='all-questions'>
        <div className='all-questions-container'>
        <div className='all-questions-left'>
            <div className='all-options'>
                <div className='all-option'>
                    <p>0</p>
                    <span>Votes</span>
                </div>
                <div className='all-option'>
                    <p>0</p>
                    <span>Answers</span>
                </div>
                <div className='all-option'>
                   
                    <small>0 Views</small>
                </div>
            </div>
            
            </div>
            <div className='question-answer'>
                <Link to='/question'>How to schedule a cron jobs in gitlab</Link>
                <div style={{width:'90%'}}>
                    <div>In gitlab schedule cron job: I am running one job during weekdays and suppose if that job is stopped on Friday then the job which runs on Monday it should the value from previous job. Example:If it is ...

                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <span className='question-tags'>react</span>
                    <span className='question-tags'>antd</span>
                    <span className='question-tags'>frontend</span>
                </div>
               
                <div className='author'>
                    <small>Timestamp</small>
                    <div className='author-details'>
                        <Avatar />
                        <p>User name</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default AllQuestions;