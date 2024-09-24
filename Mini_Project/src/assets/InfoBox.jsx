import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }) {
    const INIT_IMG = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    let COLD_URL="https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNub3d8ZW58MHx8MHx8fDA%3D";
    let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?b=1&s=612x612&w=0&k=20&c=_aZ5hzsKx_I5Lfkl9KnkgIzOhvd7RbB2wyRnbpe_zUs=";
    return (

        <div className="InfoBox">
            <div className="CardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        
                        image={
                            info.humidity > 70
                            ? RAIN_URL
                            : info.temp > 20
                            ? HOT_URL
                            : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom
                         variant="h5" 
                         component="div" >
                       {info.city}
                            {
                               
                                info.humidity > 70
                                    ? <BeachAccessIcon />
                                    : info.temp > 20
                                        ? < WbSunnyIcon/>
                                        : < AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity =  {info.humidity}&deg;C</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );


}
