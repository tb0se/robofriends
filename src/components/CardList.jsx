import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <div>
            {
                // Key should have something that does not change, so a good key is like id
                robots.map((user, index) => {
                    return (<Card
                        key={robots[index].id}
                        id={robots[index].id}
                        name={robots[index].name}
                        email={robots[index].email}
                    />
                    );
                })
            }
        </div>
    );
}

export default CardList;