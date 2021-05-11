import React, {useEffect} from 'react';
import {Loader, LoaderOptions} from 'google-maps';
import {google_maps_api_key} from '../firebase_cfg';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { selectLogin} from '../loginStatusSlice';
import '../styles/client.css';


export default function Client() {
    function getDistance(markerArray, google){
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [markerArray[0].position],
            destinations: [markerArray[1].position],
            travelMode: 'WALKING',
        }, (response, status) => {
            console.log('distance test');
            console.log(response);
            if (status === "OK"){
                console.log(response);
                console.log(response.rows[0].elements[0].distance.text)
                let distance_text = response.rows[0].elements[0].duration.text;
                document.getElementById('check_in_status').innerHTML = `${loginStatus.email} You are ${distance_text} walking distance`;
                let distance_parts = distance_text.split(' ');
                if ( distance_parts[1] === 'hours') {
                    document.getElementById('check_in_button').disabled = true;
                } else {
                    alert('Make sure you check in soon');
                }
            }
        })
    }
    function calculateAndDisplayRoute(
        directionRender,
        directionService,
        markerArray,
        stepDisplay,
        map,
        google
    ){
        directionService.route(
            {
                origin: markerArray[0].position,
                destination: markerArray[1].position,
                travelMode: google.maps.TravelMode.WALKING,
            },
            (results,status) => {
                if (status === "OK"){
                    directionRender.setDirections(results);
                }
            }
        )

    }
    var markerArray = [];
    const loginStatus = useSelector(selectLogin);
    const history = useHistory();
    useEffect(() => {
    if (loginStatus && loginStatus.value === true) {
        if (loginStatus.role != "client"){
            alert('You do not have right access login first');
            history.push('/');
        }
    } else if (loginStatus && loginStatus.value === false) {
        alert('You must login first');
        history.push('/');
    } //else {
        var kool_kids_loc = { lat: 39.94228, lng: -74.99679};
        var options: LoaderOptions = {};
        var loader = new Loader(google_maps_api_key, options);

        loader.load().then((google) => {
            var element = document.getElementById("map");
            if (element){
            var map = new google.maps.Map(document.getElementById("map"), {
                center: kool_kids_loc,
                zoom: 15,
            });
            const marker = new google.maps.Marker({
                position: kool_kids_loc,
                map,
                title: "Kook Kids World"
            });
            markerArray.push(marker);
            // find locaiton of user
            var client_marker;
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position) => {
                    client_marker = new google.maps.Marker({
                        position: { lat : position.coords.latitude,
                                    lng : position.coords.longitude,},
                        map,
                        title: "Client"
                    });
                    console.log('test client market');
                    console.log(client_marker.position);
                    markerArray.push(client_marker);
                    const directionService = new google.maps.DirectionsService();
                    const directionRender = new google.maps.DirectionsRenderer({map:map});
                    const stepDisplay = new google.maps.InfoWindow();
                    calculateAndDisplayRoute(
                        directionRender,
                        directionService,
                        markerArray,
                        stepDisplay,
                        map,google
                    )

                    getDistance( markerArray,google);
                });
            }
            }
        });
    //}
    },[]);

    return (
        <React.Fragment>
        <div className="client">
            <div className='left-side'>
                <p>CheckIn</p>
                <p id="check_in_status">Status:</p>
                <div className="checkin-box">
                    <h1> Check In </h1>
                    <button id='check_in_button'>CheckIn</button>
                </div>
                <p>Messaging</p>
                <div className="message">
                    <div className="messageArea">

                    </div>
                </div>
            </div>
            <div className='right-side'>
                <p>School Location</p>
                <div id="map" />
                <div className="cal" />
                <div className="events"/>
            </div>
        </div>

        </React.Fragment>
    )
};
