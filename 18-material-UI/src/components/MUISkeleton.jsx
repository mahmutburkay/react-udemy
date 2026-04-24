import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import Bugatti from '../images/Bugatti_Divo.jpg'

function MUISkeleton() {

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, [])




    return (
        <div>

            {
                loading ? <Skeleton width={250} height={150} animation='wave' />

                    : <img src={Bugatti} width={250} height={150} />
            }

        </div>
    )
}

export default MUISkeleton