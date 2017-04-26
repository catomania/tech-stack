import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View>
				<Header headerText="Mindy's List of Favorite Foods" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;