import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { LinearProgress } from '@mui/material';

function MUIProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress == 100) {
                    return 0;
                }

                const plusValue = Math.floor(Math.random() * 10)
                return oldProgress + plusValue;
            })
        }, 500)


        return () => {
            clearInterval(timer);

        }

    }, [])


    return (
        <div>

            <CircularProgress />
            <CircularProgress color='success' />

            <br />
            <br />

            <LinearProgress color='secondary' />
            <br /> <br /><br />
            <LinearProgress variant='determinate' value={progress} />

        </div>
    )
}

export default MUIProgress