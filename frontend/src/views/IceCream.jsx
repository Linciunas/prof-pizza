import React, { Component } from 'react';
import Header from '../component/Header';
import MenuButton from '../component/MenuButton';
import NavigationSection from '../component/NavigationSection';

class IceCream extends Component {
    render() {
        return (
            <>
                <Header show={"show"}></Header>
                <MenuButton></MenuButton>
                <NavigationSection></NavigationSection>
                <div className='bg-amber-200 h-full'>
                
                </div>
            </>
        );
    }
}

export default IceCream;
