import React, { Component } from 'react';
import Header from '../component/Header';
import MenuButton from '../component/MenuButton';
import NavigationSection from '../component/NavigationSection';

class Drinks extends Component {
    render() {
        return (
            <>
                <Header show={"show"}></Header>
                <MenuButton></MenuButton>
                <NavigationSection></NavigationSection>
                <div className='bg-blue-300 h-full'>
                
                </div>
            </>
        );
    }
}

export default Drinks;
