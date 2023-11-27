import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native-web'
import { TouchableOpacity, Image, Pressable, ImageBackground, FlatList } from 'react-native'
import PropTypes from 'prop-types';
import { colors, images } from '../constants';
import SegmentedControlTab from 'react-native-segmented-control-tab';
const axios = require('axios');
// import Modal from "react-native-modal";
//import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { VirtualizedListCellContextProvider } from 'react-native/Libraries/Lists/VirtualizedListContext';
const myIcon = <Icon name="play" size={20} color="#333" />;
const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VZB5hU9xt5HU8MQjHIzLVHU8RDRhu1yVHg&usqp=CAU" };
const MovieDetail1 = ({ navigation }) => {
    console.log(navigation)
    const [segmentIndex, setSegmentIndex] = useState(0)
    const [id, setId] = useState(0)
    const imageList = [
        {
            "imageName": "https://source.unsplash.com/1024x768/?nature"
        },
        {
            "imageName": "https://source.unsplash.com/1024x768/?water"
        },
        {
            "imageName": "https://source.unsplash.com/1024x768/?girl"
        },
        {
            "imageName": "https://source.unsplash.com/1024x768/?tree"
        }

    ]
    const [data, setData] = useState({
        "title": {
            "id": 2401,
            "name": "The Suicide Squad",
            "type": "movie",
            "release_date": "2021-07-27T23:00:00.000000Z",
            "year": 2021,
            "description": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
            "genre": "",
            "tagline": "They're dying to save the world.",
            "poster": "https://image.tmdb.org/t/p/original/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
            "backdrop": "https://image.tmdb.org/t/p/w1280/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
            "runtime": 132,
            "trailer": "",
            "budget": 180000000,
            "revenue": 167381210,
            "views": 6,
            "popularity": 632,
            "imdb_id": "tt6334354",
            "tmdb_id": 436969,
            "season_count": 0,
            "fully_synced": true,
            "allow_update": true,
            "created_at": "2021-02-06T23:16:22.000000Z",
            "updated_at": "2022-01-21T19:12:42.000000Z",
            "language": "en",
            "country": "",
            "original_title": "The Suicide Squad",
            "affiliate_link": "",
            "certification": "r",
            "episode_count": 0,
            "series_ended": false,
            "is_series": false,
            "show_videos": false,
            "adult": false,
            "rating": "7.7",
            "model_type": "title",
            "vote_count": 5330,
            "images": [
                {
                    "id": 1920149,
                    "url": "https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920150,
                    "url": "https://image.tmdb.org/t/p/original/rAgsOIhqRS6tUthmHoqnqh9PIAE.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920151,
                    "url": "https://image.tmdb.org/t/p/original/ndZy0eefZb7nX0XRMGLIEDdBZfI.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920152,
                    "url": "https://image.tmdb.org/t/p/original/jKgulFr4CErJH94aMazXJTYxk7o.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920153,
                    "url": "https://image.tmdb.org/t/p/original/buApmHPM5fsXSZOpxKwl3gYhTgZ.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920154,
                    "url": "https://image.tmdb.org/t/p/original/fQ8Nsd1gKB5Y8g2eYdlHOasT5dk.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920155,
                    "url": "https://image.tmdb.org/t/p/original/2eKFBzUwwQVrcG5uWsvVEigrQBf.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920156,
                    "url": "https://image.tmdb.org/t/p/original/ir30jXozCwU7tuIZC6gDCMS1Ck3.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920157,
                    "url": "https://image.tmdb.org/t/p/original/dzmFetTvLmCWYMWgtSoLJclcqUL.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920158,
                    "url": "https://image.tmdb.org/t/p/original/7wUpy2bb00nfMshVyvxsaqyrGX9.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920159,
                    "url": "https://image.tmdb.org/t/p/original/dedpI3T7I88PSjVe194HQIqVCWh.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920160,
                    "url": "https://image.tmdb.org/t/p/original/ws8wf6HtNXYakh0K8JyYd6XGM6F.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920161,
                    "url": "https://image.tmdb.org/t/p/original/k0QEwuQ2DEhb5JlKucIzxwiuHaF.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920162,
                    "url": "https://image.tmdb.org/t/p/original/xHB2hzJ5QJBFwT0j6fjZhyGR7vs.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920163,
                    "url": "https://image.tmdb.org/t/p/original/VqJ9obyzswHrwLR70Fpbfnr8aC.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920164,
                    "url": "https://image.tmdb.org/t/p/original/cmv79ikVNE3wSpJErpun2R1Mr54.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920165,
                    "url": "https://image.tmdb.org/t/p/original/yi2waVsBG8lAe7mX0UxEhuNcEb3.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920166,
                    "url": "https://image.tmdb.org/t/p/original/isCcWDLPCk3wYxz1zAdmYqcvM8S.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920167,
                    "url": "https://image.tmdb.org/t/p/original/gdLqCT8DJyR91ZanOjuhVqcmjmD.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920168,
                    "url": "https://image.tmdb.org/t/p/original/2RJfehoZ8WwzGofEDHgyjee2V0J.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920169,
                    "url": "https://image.tmdb.org/t/p/original/cXAqY4Y6YnIUabNMm48KMWB9ITo.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920170,
                    "url": "https://image.tmdb.org/t/p/original/7KtzEmMMpEzLQE8v1ED0629cOnS.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920171,
                    "url": "https://image.tmdb.org/t/p/original/uOiWfNl5VUp1m8CQT2z0Ks8Kr4W.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920172,
                    "url": "https://image.tmdb.org/t/p/original/erK7hC7NK96ayetRvY9cgynugrT.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920173,
                    "url": "https://image.tmdb.org/t/p/original/avmkzUioHG57H88RugWQwC5xMt3.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920174,
                    "url": "https://image.tmdb.org/t/p/original/hg3SfX5Dap72va1kT5UDPmmigJl.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920175,
                    "url": "https://image.tmdb.org/t/p/original/6IJWF1pALrms8Ls9JRptVpwHXa2.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920176,
                    "url": "https://image.tmdb.org/t/p/original/qMJNHKUta5KoAVJKpjeNTugsle8.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920177,
                    "url": "https://image.tmdb.org/t/p/original/7ARfWkRUmSO5Js6okuOwVd3rQRz.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920178,
                    "url": "https://image.tmdb.org/t/p/original/3LHL48znoGDXWhOYc9UhxqbVjko.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920179,
                    "url": "https://image.tmdb.org/t/p/original/jL7vfJ2ek5tI4rSDL09BIzjffzL.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920180,
                    "url": "https://image.tmdb.org/t/p/original/jziTfpWyyH9dr6y6BsjQcGwMOQO.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920181,
                    "url": "https://image.tmdb.org/t/p/original/sVbXEp6hOQbxaErnCw4kK6ZfZLk.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920182,
                    "url": "https://image.tmdb.org/t/p/original/aRZDeH5isNnpPcmUdj2eM4ndEfD.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920183,
                    "url": "https://image.tmdb.org/t/p/original/1rpdWnZxSrEvhYVm1fjV4ICeWmP.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920184,
                    "url": "https://image.tmdb.org/t/p/original/fwiYfDfmVtrQg5S16QeCB4WmoQ2.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920185,
                    "url": "https://image.tmdb.org/t/p/original/u80OocGgkKor1jaiwpzFjnxAp8I.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920186,
                    "url": "https://image.tmdb.org/t/p/original/eroGW1zu4SFQA4wWuydyYuKpJGa.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920187,
                    "url": "https://image.tmdb.org/t/p/original/9xY4WB553gGdkt3SAgEj75MpRfa.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920188,
                    "url": "https://image.tmdb.org/t/p/original/yN9KmokIN6tXI70DOZqmHZ0GKtD.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920189,
                    "url": "https://image.tmdb.org/t/p/original/poW1uvGRmvTxMdEd1oAVVOMeUk1.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920190,
                    "url": "https://image.tmdb.org/t/p/original/xWX0eH21TsPyWZz1ZMtnMHskYjW.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920191,
                    "url": "https://image.tmdb.org/t/p/original/xLEo1kaLpZADVRfJufe0VIi8e0q.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920192,
                    "url": "https://image.tmdb.org/t/p/original/mzawSXvIwpYFqAlPRcUr92CrS08.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920193,
                    "url": "https://image.tmdb.org/t/p/original/cc2eQlo7kSFBNIygSQtosl5uggD.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920194,
                    "url": "https://image.tmdb.org/t/p/original/n4a0EKHXgZlH9O66mcgJpSDtS6F.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920195,
                    "url": "https://image.tmdb.org/t/p/original/1ummWymrOS08dW6xXDe2tC2hkKd.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920196,
                    "url": "https://image.tmdb.org/t/p/original/M5P1UE1fE7TaORnv5NCkA6gC83.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                },
                {
                    "id": 1920197,
                    "url": "https://image.tmdb.org/t/p/original/oUfnwR3ww13N7B9I3eHteVHwXZ1.jpg",
                    "type": "backdrop",
                    "source": "tmdb"
                }
            ],
            "genres": [
                {
                    "id": 2,
                    "type": "genre",
                    "name": "adventure",
                    "display_name": "Adventure"
                },
                {
                    "id": 3,
                    "type": "genre",
                    "name": "science-fiction",
                    "display_name": "Science Fiction"
                },
                {
                    "id": 4,
                    "type": "genre",
                    "name": "action",
                    "display_name": "Action"
                },
                {
                    "id": 28,
                    "type": "genre",
                    "name": "comedy",
                    "display_name": "Comedy"
                },
                {
                    "id": 45,
                    "type": "genre",
                    "name": "fantasy",
                    "display_name": "Fantasy"
                },
                {
                    "id": 108,
                    "type": "genre",
                    "name": "crime",
                    "display_name": "Crime"
                }
            ],
            "seasons": [],
            "videos": [
                {
                    "id": 366453,
                    "name": "Full Movie Preview",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/vRaF3V1PtsA",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 1,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "clip",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 366454,
                    "name": "Gag Reel",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/fEbgyXi-m0A",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 2,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "bloopers",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 366455,
                    "name": "The Suicide Squad - Cast Debrief",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/DY7Q0WmF1s8",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 3,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "featurette",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 366456,
                    "name": "The Gunns Blazing Featurette",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/RFZG_IG9EqA",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 4,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "featurette",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 366457,
                    "name": "The Suicide Squad - King Shark",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/JD17Usa3588",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 5,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "teaser",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 366458,
                    "name": "It's A Suicide Mission Featurette",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/32V02vyss2A",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 6,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "featurette",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 366459,
                    "name": "IGN Exclusive Official Clip",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/RVKhBZCAOP8",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 7,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "clip",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 366460,
                    "name": "In On The Action Featurette",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/48ZfriQMh70",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 8,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "featurette",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 366461,
                    "name": "Official “Rain” Trailer",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/eg5ciqQzmK0",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 9,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "trailer",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 253027,
                    "name": "The.Suicide.Squad.2021",
                    "thumbnail": "",
                    "url": "https://cdn3.flicknplay.com/The.Suicide.Squad.2021/The.Suicide.Squad.2021.mp4",
                    "type": "video",
                    "quality": "1080p",
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "local",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 0,
                    "created_at": "2021-08-18T01:07:39.000000Z",
                    "updated_at": "2021-08-18T01:07:39.000000Z",
                    "user_id": 1,
                    "language": "en",
                    "category": "full",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                },
                {
                    "id": 366452,
                    "name": "Peacemaker Takes Us Behind the Scenes of Suicide Squad",
                    "thumbnail": null,
                    "url": "https://youtube.com/embed/B_qpey8IS4A",
                    "type": "embed",
                    "quality": null,
                    "title_id": 2401,
                    "season_num": null,
                    "episode_num": null,
                    "source": "tmdb",
                    "negative_votes": 0,
                    "positive_votes": 0,
                    "reports": 0,
                    "approved": true,
                    "order": 0,
                    "created_at": "2022-01-21T19:12:42.000000Z",
                    "updated_at": "2022-01-21T19:12:42.000000Z",
                    "user_id": null,
                    "language": "en",
                    "category": "behind the scenes",
                    "episode_id": null,
                    "score": null,
                    "model_type": "video",
                    "captions": [],
                    "latest_play": null
                }
            ],
            "credits": [
                {
                    "id": 111,
                    "name": "James Gunn",
                    "poster": "https://image.tmdb.org/t/p/original/nHr6yzPF15jQz5eBke1SDNWectu.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 111,
                        "creditable_type": "App\\Title",
                        "id": 169462,
                        "job": "director",
                        "department": "directing",
                        "order": 0,
                        "character": null
                    }
                },
                {
                    "id": 78554,
                    "name": "John Ostrander",
                    "poster": "",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 78554,
                        "creditable_type": "App\\Title",
                        "id": 169473,
                        "job": "characters",
                        "department": "writing",
                        "order": 0,
                        "character": null
                    }
                },
                {
                    "id": 219214,
                    "name": "Kim Yale",
                    "poster": "",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 219214,
                        "creditable_type": "App\\Title",
                        "id": 169474,
                        "job": "characters",
                        "department": "writing",
                        "order": 0,
                        "character": null
                    }
                },
                {
                    "id": 111,
                    "name": "James Gunn",
                    "poster": "https://image.tmdb.org/t/p/original/nHr6yzPF15jQz5eBke1SDNWectu.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 111,
                        "creditable_type": "App\\Title",
                        "id": 169463,
                        "job": "writer",
                        "department": "writing",
                        "order": 0,
                        "character": null
                    }
                },
                {
                    "id": 29541,
                    "name": "Margot Robbie",
                    "poster": "https://image.tmdb.org/t/p/original/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 29541,
                        "creditable_type": "App\\Title",
                        "id": 82785,
                        "job": "cast",
                        "department": "cast",
                        "order": 0,
                        "character": "Harleen Quinzel / Harley Quinn"
                    }
                },
                {
                    "id": 1394,
                    "name": "Idris Elba",
                    "poster": "https://image.tmdb.org/t/p/original/be1bVF7qGX91a6c5WeRPs5pKXln.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 1394,
                        "creditable_type": "App\\Title",
                        "id": 169436,
                        "job": "cast",
                        "department": "cast",
                        "order": 1,
                        "character": "Robert DuBois / Bloodsport"
                    }
                },
                {
                    "id": 9138,
                    "name": "John Cena",
                    "poster": "https://image.tmdb.org/t/p/original/rgB2eIOt7WyQjdgJCOuESdDlrjg.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 9138,
                        "creditable_type": "App\\Title",
                        "id": 169437,
                        "job": "cast",
                        "department": "cast",
                        "order": 2,
                        "character": "Christopher Smith / Peacemaker"
                    }
                },
                {
                    "id": 78417,
                    "name": "Joel Kinnaman",
                    "poster": "https://image.tmdb.org/t/p/original/c4TTWy1WntzDxpgIe8kbODjWOfD.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 78417,
                        "creditable_type": "App\\Title",
                        "id": 13622796,
                        "job": "cast",
                        "department": "cast",
                        "order": 3,
                        "character": "Colonel Rick Flag"
                    }
                },
                {
                    "id": 7890,
                    "name": "Sylvester Stallone",
                    "poster": "https://image.tmdb.org/t/p/original/qDRGPAcQoW8Wuig9bvoLpHwf1gU.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 7890,
                        "creditable_type": "App\\Title",
                        "id": 10794656,
                        "job": "cast",
                        "department": "cast",
                        "order": 4,
                        "character": "Nanaue / King Shark (voice)"
                    }
                },
                {
                    "id": 14574,
                    "name": "Viola Davis",
                    "poster": "https://image.tmdb.org/t/p/original/xDssw6vpYNRjsybvMPRE30e0dPN.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 14574,
                        "creditable_type": "App\\Title",
                        "id": 169440,
                        "job": "cast",
                        "department": "cast",
                        "order": 5,
                        "character": "Amanda Waller"
                    }
                },
                {
                    "id": 28874,
                    "name": "David Dastmalchian",
                    "poster": "https://image.tmdb.org/t/p/original/sF7yHISn8kuBy7T39gB5dMpObpk.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 28874,
                        "creditable_type": "App\\Title",
                        "id": 73999,
                        "job": "cast",
                        "department": "cast",
                        "order": 6,
                        "character": "Abner Krill / Polka-Dot Man"
                    }
                },
                {
                    "id": 65771,
                    "name": "Jai Courtney",
                    "poster": "https://image.tmdb.org/t/p/original/9kMUy38pj7oTCuQUhfkbgXOedCq.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 65771,
                        "creditable_type": "App\\Title",
                        "id": 71231,
                        "job": "cast",
                        "department": "cast",
                        "order": 7,
                        "character": "George 'Digger' Harkness / Captain Boomerang"
                    }
                },
                {
                    "id": 28901,
                    "name": "Peter Capaldi",
                    "poster": "https://image.tmdb.org/t/p/original/wcsd1tMVFjgplfZlTUfb7fiD2zP.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 28901,
                        "creditable_type": "App\\Title",
                        "id": 10839822,
                        "job": "cast",
                        "department": "cast",
                        "order": 8,
                        "character": "Gaius Grieves / The Thinker"
                    }
                },
                {
                    "id": 219211,
                    "name": "Daniela Melchior",
                    "poster": "https://image.tmdb.org/t/p/original/iLO8qrSldSTC1omutFiO9oyIz6m.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 219211,
                        "creditable_type": "App\\Title",
                        "id": 10794657,
                        "job": "cast",
                        "department": "cast",
                        "order": 9,
                        "character": "Cleo Cazo / Ratcatcher 2"
                    }
                },
                {
                    "id": 9432,
                    "name": "Michael Rooker",
                    "poster": "https://image.tmdb.org/t/p/original/dq3xFKDWJsQjPffm1bmB3TbMilq.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 9432,
                        "creditable_type": "App\\Title",
                        "id": 169442,
                        "job": "cast",
                        "department": "cast",
                        "order": 9,
                        "character": "Brian Durlin / Savant"
                    }
                },
                {
                    "id": 14043,
                    "name": "Pete Davidson",
                    "poster": "https://image.tmdb.org/t/p/original/l8xpAV5zBiOFZA2I1Cgz3Yb92AY.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 14043,
                        "creditable_type": "App\\Title",
                        "id": 10794658,
                        "job": "cast",
                        "department": "cast",
                        "order": 12,
                        "character": "Richard Hertz / Blackguard"
                    }
                },
                {
                    "id": 39640,
                    "name": "Mayling Ng",
                    "poster": "https://image.tmdb.org/t/p/original/aJodwVWlGkZdavFSVLBjB0vKYOe.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 39640,
                        "creditable_type": "App\\Title",
                        "id": 169446,
                        "job": "cast",
                        "department": "cast",
                        "order": 13,
                        "character": "Mongal"
                    }
                },
                {
                    "id": 10058,
                    "name": "Nathan Fillion",
                    "poster": "https://image.tmdb.org/t/p/original/aW6vCxkUZtwb6iH2Wf88Uq0XNVv.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 10058,
                        "creditable_type": "App\\Title",
                        "id": 10845377,
                        "job": "cast",
                        "department": "cast",
                        "order": 13,
                        "character": "Cory Pitzner / T.D.K."
                    }
                },
                {
                    "id": 25054,
                    "name": "Joaquín Cosío",
                    "poster": "https://image.tmdb.org/t/p/original/3hvUX2JyzD1YEceJEgYyadlEK9o.jpg",
                    "model_type": "person",
                    "pivot": {
                        "creditable_id": 2401,
                        "person_id": 25054,
                        "creditable_type": "App\\Title",
                        "id": 13622797,
                        "job": "cast",
                        "department": "cast",
                        "order": 13,
                        "character": "Mayor General Mateo Suarez"
                    }
                }
            ],
            "keywords": [
                {
                    "id": 9,
                    "type": "keyword",
                    "name": "based-on-comic",
                    "display_name": "Based on comic"
                },
                {
                    "id": 10,
                    "type": "keyword",
                    "name": "alien-invasion",
                    "display_name": "Alien invasion"
                },
                {
                    "id": 22,
                    "type": "keyword",
                    "name": "superhero",
                    "display_name": "Superhero"
                },
                {
                    "id": 148,
                    "type": "keyword",
                    "name": "monster",
                    "display_name": "Monster"
                },
                {
                    "id": 152,
                    "type": "keyword",
                    "name": "giant-monster",
                    "display_name": "Giant monster"
                },
                {
                    "id": 606,
                    "type": "keyword",
                    "name": "alien",
                    "display_name": "Alien"
                },
                {
                    "id": 721,
                    "type": "keyword",
                    "name": "betrayal",
                    "display_name": "Betrayal"
                },
                {
                    "id": 1301,
                    "type": "keyword",
                    "name": "convict",
                    "display_name": "Convict"
                },
                {
                    "id": 1463,
                    "type": "keyword",
                    "name": "dc-comics",
                    "display_name": "Dc comics"
                },
                {
                    "id": 3585,
                    "type": "keyword",
                    "name": "super-villain",
                    "display_name": "Super villain"
                },
                {
                    "id": 4569,
                    "type": "keyword",
                    "name": "anti-hero",
                    "display_name": "Anti hero"
                },
                {
                    "id": 4570,
                    "type": "keyword",
                    "name": "secret-mission",
                    "display_name": "Secret mission"
                },
                {
                    "id": 4571,
                    "type": "keyword",
                    "name": "dc-extended-universe",
                    "display_name": "Dc extended universe"
                },
                {
                    "id": 5681,
                    "type": "keyword",
                    "name": "parasite",
                    "display_name": "Parasite"
                },
                {
                    "id": 6135,
                    "type": "keyword",
                    "name": "world-domination",
                    "display_name": "World domination"
                },
                {
                    "id": 9555,
                    "type": "keyword",
                    "name": "villains",
                    "display_name": "Villains"
                },
                {
                    "id": 35765,
                    "type": "keyword",
                    "name": "dc",
                    "display_name": "Dc"
                }
            ]
        },
        "status": "success",
        "seo": [
            {
                "property": "og:url",
                "content": "https://www.flicknplay.com/titles/2401/the-suicide-squad",
                "nodeName": "meta"
            },
            {
                "property": "og:title",
                "content": "The Suicide Squad (2021) - flicknplay.com",
                "nodeName": "meta"
            },
            {
                "property": "og:description",
                "content": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
                "nodeName": "meta"
            },
            {
                "property": "keywords",
                "content": "reviews,photos,user ratings,synopsis,trailers,credits",
                "nodeName": "meta"
            },
            {
                "property": "og:type",
                "content": "video.movie",
                "nodeName": "meta"
            },
            {
                "property": "og:image",
                "content": "https://image.tmdb.org/t/p/original/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
                "nodeName": "meta"
            },
            {
                "property": "og:image:width",
                "content": "300",
                "nodeName": "meta"
            },
            {
                "property": "og:image:height",
                "content": "450",
                "nodeName": "meta"
            },
            {
                "nodeName": "script",
                "type": "application/ld+json",
                "_text": {
                    "@context": "http://schema.org",
                    "@type": "Movie",
                    "@id": "https://www.flicknplay.com/titles/2401/the-suicide-squad",
                    "url": "https://www.flicknplay.com/titles/2401/the-suicide-squad",
                    "name": "The Suicide Squad",
                    "image": "https://image.tmdb.org/t/p/original/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
                    "description": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
                    "genre": [
                        "adventure",
                        "science-fiction",
                        "action",
                        "comedy",
                        "fantasy",
                        "crime"
                    ],
                    "contentRating": "r",
                    "actor": [
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/29541/margot-robbie",
                            "name": "Margot Robbie"
                        },
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/1394/idris-elba",
                            "name": "Idris Elba"
                        },
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/9138/john-cena",
                            "name": "John Cena"
                        },
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/78417/joel-kinnaman",
                            "name": "Joel Kinnaman"
                        },
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/7890/sylvester-stallone",
                            "name": "Sylvester Stallone"
                        },
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/14574/viola-davis",
                            "name": "Viola Davis"
                        },
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/28874/david-dastmalchian",
                            "name": "David Dastmalchian"
                        },
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/65771/jai-courtney",
                            "name": "Jai Courtney"
                        },
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/28901/peter-capaldi",
                            "name": "Peter Capaldi"
                        },
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/219211/daniela-melchior",
                            "name": "Daniela Melchior"
                        }
                    ],
                    "director": [
                        {
                            "@type": "Person",
                            "url": "https://www.flicknplay.com/people/111/james-gunn",
                            "name": "James Gunn"
                        }
                    ],
                    "datePublished": "2021-07-28 00:00:00",
                    "keywords": [
                        "based-on-comic",
                        "alien-invasion",
                        "superhero",
                        "monster",
                        "giant-monster",
                        "alien",
                        "betrayal",
                        "convict",
                        "dc-comics",
                        "super-villain",
                        "anti-hero",
                        "secret-mission",
                        "dc-extended-universe",
                        "parasite",
                        "world-domination",
                        "villains",
                        "dc"
                    ],
                    "aggregateRating": {
                        "_ifNotNull": "title.rating",
                        "@type": "AggregateRating",
                        "ratingCount": "5330",
                        "bestRating": "10.0",
                        "worstRating": "1.0",
                        "ratingValue": "7.7"
                    },
                    "duration": "132"
                }
            },
            {
                "property": "og:site_name",
                "content": "flicknplay.com",
                "nodeName": "meta"
            },
            {
                "name": "twitter:card",
                "content": "summary",
                "nodeName": "meta"
            },
            {
                "nodeName": "link",
                "rel": "canonical",
                "href": "https://www.flicknplay.com/titles/2401/the-suicide-squad"
            },
            {
                "nodeName": "title",
                "_text": "The Suicide Squad (2021) - flicknplay.com"
            },
            {
                "name": "description",
                "content": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
                "nodeName": "meta"
            }
        ]
    })

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const handleIndexChange = index => {
        console.log(index)
        setSegmentIndex(index)
    };
    useEffect(async () => {
        setId(navigation.state.params.id)
        console.log(navigation.state.params.id)
        // const token = await AsyncStorage.getItem('user_token')
        const token = '190|oSwWLmwKojhwkjKhmQF1Po8BHJhhckHHhsoVlo1i'
        console.log(token)
        axios.get(`https://www.flicknplay.com/secure/titles/` + navigation.state.params.id, { headers: { "Authorization": `Bearer ` + token, "accept": `application/json` } }).then((response) => {

            console.log(response)
            //ListData(response.data.lists)
        })
    }, [])
    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image source={item.imageName} style={styles.images}></Image>
            </View>
            //   <TouchableOpacity  onPress={()=>{
            //     navigation.navigate('MovieDetail1')
            //   console.log(item.id)
            //   }}>
            // <View style={styles.item} >
            //     <Image  source={item?.poster} style={styles.image} />
            //      </View>
            //      </TouchableOpacity
        )
    }
    return (
        <View >
             <BackButton  goBack={() => navigation.replace('MovieDetail1')} />
            <ImageBackground source={{ uri: data.title.backdrop }} resizeMode="cover" style={styles.images}>
                <View style={[{ height: '100vh' }, styles.overlay]}>

                    <View style={styles.container}>

                        <View style={{ display: 'block' }}>
                            <Text style={styles.age}>12</Text>
                            <Text style={styles.age}>AD)))</Text>
                            <Text style={styles.age}>CC</Text>
                            <Text style={styles.age1}>{data.title.year}</Text>
                            <Text style={styles.age1}>{data.title.runtime}</Text>

                        </View>
                        <p>{data.title.genres.map(genre => {
                            return <Text key={genre.id} style={{ color: 'white' }}>{genre.display_name} </Text>
                        })}</p>
                        <View style={styles.play}>
                            <Pressable style={styles.button} >
                                <Text style={styles.text}>{myIcon}Play</Text>
                            </Pressable>

                            <Pressable style={styles.buttons} >
                                <Text style={styles.texts} onPress={() => { navigation.navigate('ModalAddProfile') }}> TRAILER</Text>
                            </Pressable>
                            <Icon name="plus" backgroundColor="#333" style={styles.wishlist}>
                            </Icon>
                            <Icon name="users" backgroundColor="#333" style={styles.wishlists}>
                            </Icon>

                        </View>
                        <p>{data.title.description}.</p>
                        <SegmentedControlTab
                            tabsContainerStyle={styles.tabsContainerStyle}
                            tabStyle={styles.tab}
                            firstTabStyle={styles.firstTabStyle}
                            lastTabStyle={styles.lastTabStyle}
                            tabTextStyle={styles.tabTextStyle}
                            activeTabStyle={styles.activeTabStyle}
                            activeTabTextStyle={styles.activeTabTextStyle}
                            selectedIndex={1}
                            allowFontScaling={false}
                            values={["SUGGESTED", "EXTRAS", "DETAILS"]}
                            selectedIndex={segmentIndex}
                            onTabPress={handleIndexChange}
                        />
                        <View>
                            {segmentIndex == 0 &&
                                <FlatList
                                    contentContainerStyle={styles.containerFlatList}
                                    data={imageList}
                                    horizontal
                                    keyExtractor={item => item.id}
                                    renderItem={renderItem}

                                    showsHorizontalScrollIndicator={false}
                                />

                            }
                            {segmentIndex == 1 &&
                                <h1>hello1</h1>

                            }
                            {segmentIndex == 2 &&
                                <h1>hello2</h1>

                            }
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}
    // const[selectedIndex,setSelectedIndex]=useState(0)

    ;

MovieDetail1.propTypes = {
    // required
    navigation: PropTypes.object.isRequired
};

const styles = {
    container: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 5,
        color: 'white',
    },
    age: {
        background: 'black',
        padding: 4,
        margin: 5,
        color: '#fff'
    },
    age1: {
        padding: 4,
        margin: 5,
        color: '#fff'
    },
    images: {
        flex: 1,
        justifyContent: "center",
        height: '100vh',
        width: '100%',
        resizeMode: 'cover',
        backgroundPosition: 'top',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginRight: 10,
        width: 110,
        height: 45,
        elevation: 3,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginRight: 10,
        width: 110,
        height: 45,
        elevation: 3,
        backgroundColor: 'black',
    },
    texts: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    play: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        maxHeight: 44,
    },
    wishlist: {
        borderRadius: 26,
        padding: 10,
        border: '2px solid white',
        height: 46,
        width: 46,
        background: 'black',
        color: 'white',
        cursor: 'pointer',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginRight: 10,
        fontSize: 22,
    },
    wishlists: {
        borderRadius: 26,
        padding: 10,
        border: '2px solid white',
        height: 46,
        width: 46,
        cursor: 'pointer',
        background: 'black',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginRight: 10,
        fontSize: 22,
    },
    tab: {
        background: 'transparent',
        border: 'none',
        width: 'auto',
        display: 'contents',
    },
    tabTextStyle: {
        fontSize: 20,
        fontWeight: 700,
        paddingRight: 20,
    },
    overlay: {
        backgroundColor: '#0000004d',
    }
    ,
    containerFlatList: {
        paddingLeft: 16,
        paddingRight: 8
    },
    item: {
        borderRadius: 4,
        height: 130,
        marginRight: 8,
        overflow: 'hidden',
        width: 93,
        marginTop:20,
    },
    placeholder: {
        backgroundColor: colors.infoGrey,
        height: '100%',
        width: '100%'
    },
    image: {
        height: '100%',
        resizeMode: 'contain',
        width: '100%'
    }

}
export default MovieDetail1;
