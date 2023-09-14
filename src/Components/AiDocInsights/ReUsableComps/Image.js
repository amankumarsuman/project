import React from "react";
import {CardMedia, Card} from "@mui/material";

const Image = ({src, height, width}) => {
    return (
        <Card className={'flex flex-col sm:flex-row justify-evenly items-center'}>
            <CardMedia
                component="img"
                style={{width: width}}
                height={height}
                width={width}
                image={src}
                alt="image"
            />
        </Card>
    )
}
export default Image;