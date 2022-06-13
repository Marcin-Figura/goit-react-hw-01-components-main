import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Profile } from './components/social_profile/Profile';
import user from 'user.json';

import { Statistics } from './components/statistics/Statistics';
import data from './data.json';

import { FriendsList } from './components/FriendsList/FriendsList';
import friends from './friends.json';

import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);
