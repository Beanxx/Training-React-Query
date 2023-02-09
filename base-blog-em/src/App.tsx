import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import './App.css';
import { Posts } from './Posts';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
