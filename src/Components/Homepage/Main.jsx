import React from 'react';
import {Link} from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import AllQuestions from './AllQuestions';
import './css/index.css';


function Main() {
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-top'>
          <h2>All Question</h2>
          <Link to='/add-question'>
          <button>Ask Question</button>
          </Link>
        </div>
        <div className='main-desc'>
          <p>All Question state</p>
          <div className='main-filter'>
            <div className='main-tabs'>
              <div className='main-tab'>
                <Link>Newest</Link>
              </div>
              <div className='main-tab'>
                <Link>Active</Link>
              </div>
              <div className='main-tab'>
                <Link>More</Link>
              </div>
            </div>
            <div className='main-filter-item'>
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className='questions'>
          <div className='question'>
          <AllQuestions />
          <AllQuestions />
          <AllQuestions />
          <AllQuestions />
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Main