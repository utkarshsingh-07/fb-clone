import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story image="https://i.pinimg.com/564x/4c/4a/de/4c4ade4d3d4756f936ac8ec44c66e103.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/61462056?s=400&u=d226a26ec4cb1d73e62c8666a6f0a47f21a2d5f6&v=4"
        title="Utkarsh Singh" />
        <Story image="https://i.pinimg.com/564x/4c/4a/de/4c4ade4d3d4756f936ac8ec44c66e103.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/61462056?s=400&u=d226a26ec4cb1d73e62c8666a6f0a47f21a2d5f6&v=4"
        title="Utkarsh Singh" />
        <Story image="https://i.pinimg.com/564x/91/7b/73/917b733dc02d9b61506066caa420155d.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/34792643?v=4"
        title="Bhavesh Sharma" />
        <Story image="https://i.pinimg.com/564x/d1/42/1b/d1421bbb6ee46ffa91c5915e51038780.jpg"
        profileSrc="https://pps.whatsapp.net/v/t61.24694-24/290976948_5190781254337324_7663904889603604156_n.jpg?ccb=11-4&oh=01_AVz1lCxokckCXNhlZ0irtA-N3U-UMGJwGZj5c8zzP9HDjA&oe=62CC95C4"
        title="Aparna Upadhyay" />
        <Story image="https://i.pinimg.com/564x/57/62/dd/5762dd32949ae942da2cee950c313bfe.jpg"
        profileSrc="https://pps.whatsapp.net/v/t61.24694-24/290395363_1111115499818632_8059710870540267794_n.jpg?ccb=11-4&oh=01_AVyMU1K62wiCeAmADxMhubN5L2UdjFZe8ZR_ekKkPSzmSQ&oe=62CC840B"
        title="Manisha Upadhyay" />
    </div>
  )
}

export default StoryReel