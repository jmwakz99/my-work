import React from 'react';

import Card from '../../components/UIElements/Card';
import './CardItem.css'


const CardItem = props => {
    return <section id="portfolio">
        <Card>
            <img src="/utally.png" alt="" className="portfolio__image" />
        </Card>

    </section>

}

export default CardItem;