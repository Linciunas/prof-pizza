import React, { Component } from 'react';
import Header from '../component/Header';
import MenuButton from '../component/MenuButton';
import NavigationSection from '../component/NavigationSection';

class Coffee extends Component {
    render() {
        return (
            <>
                <Header show={"show"}></Header>
                <MenuButton></MenuButton>
                <NavigationSection></NavigationSection>
                <div className='bg-[#B1876A] h-full'>
            
                </div>
            </>
        );
    }
}

export default Coffee;
