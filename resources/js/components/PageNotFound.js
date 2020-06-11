import React from 'react';
import {Link} from 'react-router-dom';



const PageNotFound = () =>  {
    return(
        <div className="flex justify-center w-3/4 items-center m-auto mt-20">
            <div className='w-1/2 '>
                <h1 className='text-6xl font-bold'>Oops!</h1>
                <h2 className='text-2xl pt-4'>We can't seem to find the page you are looking for.</h2>
                <div className='pt-8 flex flex-col space-y-1'>
                    <h3 className='text-lg font-semibold pb-2'>Here are some hepful links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/inns">Serach For ThinkInn</Link>
                </div>

            </div>    
            <div className='w-1/2'>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1097.33 810.62">
                        <defs><linearGradient id="18f7bdf6-b159-4951-801a-ccf90bc3291f" x1="588.67" y1="838.15" x2="588.67" y2="115.47" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"/><stop offset="0.54" stop-color="gray" stop-opacity="0.12"/><stop offset="1" stop-color="gray" stop-opacity="0.1"/></linearGradient></defs><title>lost</title>
                        <path d="M63.41,474.66C80.77,548.86,117.52,613,175.6,644.09c120.7,64.61,392.91,31.29,596.07-7A465.21,465.21,0,0,0,1036.21,485.9Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f" opacity="0.1"/><path d="M850.65,694.41S783,735.21,907.68,798c0,0,27.46-51-2.9-92.57a40.94,40.94,0,0,0-53.12-11.64Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M851.43,693.55S909.31,737.83,907.68,798" transform="translate(-51.34 -44.69)" fill="none" stroke="#535461" stroke-miterlimit="10"/><path d="M69.65,706.41S2,747.21,126.68,810c0,0,27.46-51-2.9-92.57a40.94,40.94,0,0,0-53.12-11.64Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M70.43,705.55S128.31,749.83,126.68,810" transform="translate(-51.34 -44.69)" fill="none" stroke="#535461" stroke-miterlimit="10"/><path d="M911,803.77s-21.19-72,4-124.91a113.65,113.65,0,0,0,9.19-71.3A191.13,191.13,0,0,0,914,574.1" transform="translate(-51.34 -44.69)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"/><path d="M929.69,540.64c0,8.82-16,34.39-16,34.39s-16-25.57-16-34.39a16,16,0,0,1,31.93,0Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M956.08,589.48c-4.79,7.4-32.09,20.19-32.09,20.19s.5-30.14,5.29-37.54a16,16,0,0,1,26.8,17.36Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M954.93,672.95c-7.87,4-37.89,1.23-37.89,1.23s15.64-25.77,23.52-29.74a16,16,0,0,1,14.38,28.51Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M939.83,735.91c-7.09,5.24-37.14,7.61-37.14,7.61s11.06-28,18.15-33.29a16,16,0,0,1,19,25.67Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M890.46,611.38c6.32,6.14,35.79,12.51,35.79,12.51s-7.22-29.27-13.54-35.41a16,16,0,0,0-22.25,22.9Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M873.75,685.23c7.87,4,37.89,1.23,37.89,1.23S896,660.69,888.12,656.72a16,16,0,1,0-14.38,28.51Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M867.35,759.24c7.09,5.24,37.14,7.61,37.14,7.61s-11.06-28-18.15-33.29a16,16,0,1,0-19,25.67Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M929.69,540.64c0,8.82-16,34.39-16,34.39s-16-25.57-16-34.39a16,16,0,0,1,31.93,0Z" transform="translate(-51.34 -44.69)" opacity="0.25"/><path d="M956.08,589.48c-4.79,7.4-32.09,20.19-32.09,20.19s.5-30.14,5.29-37.54a16,16,0,0,1,26.8,17.36Z" transform="translate(-51.34 -44.69)" opacity="0.25"/><path d="M954.93,672.95c-7.87,4-37.89,1.23-37.89,1.23s15.64-25.77,23.52-29.74a16,16,0,0,1,14.38,28.51Z" transform="translate(-51.34 -44.69)" opacity="0.25"/><path d="M939.83,735.91c-7.09,5.24-37.14,7.61-37.14,7.61s11.06-28,18.15-33.29a16,16,0,0,1,19,25.67Z" transform="translate(-51.34 -44.69)" opacity="0.25"/><path d="M890.46,611.38c6.32,6.14,35.79,12.51,35.79,12.51s-7.22-29.27-13.54-35.41a16,16,0,0,0-22.25,22.9Z" transform="translate(-51.34 -44.69)" opacity="0.25"/><path d="M873.75,685.23c7.87,4,37.89,1.23,37.89,1.23S896,660.69,888.12,656.72a16,16,0,1,0-14.38,28.51Z" transform="translate(-51.34 -44.69)" opacity="0.25"/><path d="M867.35,759.24c7.09,5.24,37.14,7.61,37.14,7.61s-11.06-28-18.15-33.29a16,16,0,1,0-19,25.67Z" transform="translate(-51.34 -44.69)" opacity="0.25"/><path d="M960,805.14s-21.19-72,4-124.91a113.65,113.65,0,0,0,9.19-71.3,191.13,191.13,0,0,0-10.09-33.46" transform="translate(-51.34 -44.69)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"/><path d="M978.73,542c0,8.82-16,34.39-16,34.39s-16-25.57-16-34.39a16,16,0,0,1,31.93,0Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M1005.12,590.85C1000.33,598.25,973,611,973,611s.5-30.14,5.29-37.54a16,16,0,0,1,26.8,17.36Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M1004,674.32c-7.87,4-37.89,1.23-37.89,1.23s15.64-25.77,23.52-29.74A16,16,0,0,1,1004,674.32Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M988.87,737.28c-7.09,5.24-37.14,7.61-37.14,7.61s11.06-28,18.15-33.29a16,16,0,0,1,19,25.67Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M939.5,612.75c6.32,6.14,35.79,12.51,35.79,12.51s-7.22-29.27-13.54-35.41a16,16,0,0,0-22.25,22.9Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M922.78,686.6c7.87,4,37.89,1.23,37.89,1.23S945,662.06,937.16,658.09a16,16,0,0,0-14.38,28.51Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M916.38,760.61c7.09,5.24,37.14,7.61,37.14,7.61s-11.06-28-18.15-33.29a16,16,0,1,0-19,25.67Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f"/><path d="M1128.77,125.41H1017.3a9.63,9.63,0,1,1,0-19.27h19.27a9.63,9.63,0,0,1,0-19.27H1022.8a9.63,9.63,0,0,1,0-19.27H1081c-12.91-6-28-10.27-45.38-12.51-158.64-20.38-215.28-6.9-235.26,7-24.65,17.1-52.15,29.68-81.54,35.74C620.92,118,437.87,142.29,272,90c-82.46-26-143.75,17.92-180.48,91.28H1148.13c-1.38-21.32-5.51-41-13.09-58.24A9.58,9.58,0,0,1,1128.77,125.41Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f" opacity="0.1"/><path d="M54,319.79a491.06,491.06,0,0,0,4.33,129.46L1037,485a460,460,0,0,0,68-103.7ZM441,412.14H421.77a9.63,9.63,0,0,1,0,19.27H310.3a9.63,9.63,0,1,1,0-19.27h19.27a9.63,9.63,0,0,1,0-19.27H315.8a9.63,9.63,0,0,1,0-19.27H427.27a9.63,9.63,0,1,1,0,19.27H441a9.63,9.63,0,0,1,0,19.27Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f" opacity="0.1"/><path d="M1148.17,182,79.68,208c-13,33.41-21.61,71.19-25.59,110.34H1129.45A456.46,456.46,0,0,0,1145,248C1148.17,225,1149.46,202.71,1148.17,182ZM271,267.14H251.77a9.63,9.63,0,0,1,0,19.27H140.3a9.63,9.63,0,1,1,0-19.27h19.27a9.63,9.63,0,0,1,0-19.27H145.8a9.63,9.63,0,0,1,0-19.27H257.27a9.63,9.63,0,1,1,0,19.27H271a9.63,9.63,0,0,1,0,19.27Z" transform="translate(-51.34 -44.69)" fill="#ff5a5f" opacity="0.1"/><ellipse cx="550.33" cy="777.62" rx="533" ry="33" fill="#ff5a5f"/><path d="M774.44,313.8s-61.81-58.17-70.74-66.87c-3.11-3-6.05-6-8.56-8.53a33.57,33.57,0,0,0-17.73-9.29c-23.16-4.39-46.85-18.63-46.85-18.63h0c-.13-.17-.26-.32-.38-.5a28.17,28.17,0,0,1-4.35-9.3c-.13-.49-.26-1-.37-1.52q.56-.72,1.09-1.47a7.16,7.16,0,0,0,1.17-.53c2.93-1.67,4.58-4.76,5.69-7.8,1-2.69,1.8-5.66,4.18-7.41a8.74,8.74,0,0,0,2.27-1.81,5.33,5.33,0,0,0,.53-3.09c0-6.83-1.09-12.07.5-18.73,2.54-10.66,4.87-24-3.18-31.91a28.11,28.11,0,0,0-15.16-7.55c-5.17-.82-12.82,6.22-18.06,6-13.35-.51-24.6-12.55-37.29-8.66a26.22,26.22,0,0,0-13.7,9.82c-6.26,8.92-5.66,20.46-4.76,31.1a3.87,3.87,0,0,0,.69,2.27c.47.55,1.22.84,1.68,1.39a3.37,3.37,0,0,1,.52,2.49,16.34,16.34,0,0,1-1.24,5,2,2,0,0,0-.19,1.81,1.89,1.89,0,0,0,1,.68,9.09,9.09,0,0,0,1.65.39c-.09.88-.17,1.76-.2,2.65,0,.5,0,1,0,1.51a39.14,39.14,0,0,0,17.82,32.68c.11.72.23,1.46.34,2.23.34,2.37.65,5,.88,7.86,0,.52.08,1,.12,1.57l-.27-.55-43,21.08a21.31,21.31,0,0,0-8.67,4.25l-.85.42v.25q-.53.44-1.08.94L480.63,203.9l-87,75.52,47.84,51.51,53.76-4.48c-2.65,18.2-4.46,32.15-4.46,32.15s-9.83,42.13,37.79,34.07c-.31,26.57-11.69,70.91-11.69,70.91a23.42,23.42,0,0,0,4.63,4.57l-.27,1.81-3,20.37s-17.86,49.48-20.6,93.61-6.18,68.87-6.18,68.87l-6.18,88.27-8.69,40.36a204.06,204.06,0,0,1-49.4,39.5,6.92,6.92,0,0,0-2.8,9.48c3.52,6.06,14.35,12.35,47.15,2.27,52.2-16,47.39-15.38,47.39-15.38s.77-21.42-1.45-34.12c-.07-.38-.14-.75-.21-1.12,12.5-14.09,6.46-37,6.46-37s24.72-48.14,13-79.57c0,0-2.75-26.75,11.68-39.45.2-.18.41-.38.62-.59l.19-.2.47-.5.21-.23.55-.64.12-.14c.22-.27.45-.56.68-.86l.18-.24L552,622l.22-.32.54-.79.18-.26.73-1.11.14-.22.61-1,.23-.38.56-.94.21-.36.77-1.34v0l.77-1.38.22-.41.59-1.09.23-.44.71-1.35.09-.17.82-1.6.2-.39.64-1.27.24-.48.67-1.36.17-.34.84-1.75.14-.29.7-1.49.24-.51.65-1.39.21-.45.86-1.87,0,0,.83-1.85.23-.51.65-1.47.22-.51L568,591l0-.08.87-2,.19-.43.68-1.58.23-.53.71-1.69.14-.32.86-2,.14-.33.71-1.7.23-.55.65-1.59.19-.46.83-2,.07-.17.75-1.85.23-.57.61-1.52.22-.55.72-1.82.07-.19.78-2,.23-.58.56-1.43.24-.63.59-1.52.17-.45.73-1.89.2-.52.53-1.38.27-.7.47-1.22.25-.66.66-1.75.19-.51.48-1.28.27-.71.4-1.07.27-.73.45-1.21.29-.78.45-1.22.29-.78.31-.84.29-.8.25-.69.67-1.82.11-.31.31-.86.21-.57.32-.87.15-.41c2.87-7.91,4.63-13,4.63-13s13,45.47,11,59.51,12.36,66.2,12.36,66.2-8.24,52.16-3.43,64.86-6.87,60.18-6.87,60.18.89.49,2.4,1.24l-.09,1.29c-.75,10.44-2.38,30.5-4.37,38.26-2.75,10.7-1.37,22.07,20.6,20.73s22.66-14.71,22.66-14.71-7.25-23.38-8.14-37.17c0-.45,0-.89-.06-1.32l0,0,.62-.23.18-.07c.25-.11.49-.22.72-.34l0,0c.22-.12.42-.24.63-.37l.18-.12q.26-.18.51-.38l.12-.1q.3-.25.57-.52l.13-.13q.21-.23.41-.47l.14-.18c.16-.21.32-.43.47-.67,7.55-12,8.24-37.45,8.24-37.45s15.11-85.59,9.62-97-2.75-38.11-2.75-38.11-6.18-40.12.69-59.51c5.14-14.52,8.36-64.66,8.21-88.65q0-.75,0-1.47c0-.17,0-.34,0-.51,5.12-6.36,9-17.52,6.24-37.08-.16-1.11-.28-2.23-.4-3.37,7.8-5.83,15.5-12.68,15.5-12.68l2.66-2.74.85-.88c.74.31,1.52.59,2.33.84,3,1.36,5.14,2.12,5.14,2.12s39.15-32.1,68.68-47.48S774.44,313.8,774.44,313.8Zm-46.7,28.08S686.53,368,679,381.34a10,10,0,0,0-1,2.38l-1,.42h0l-1.26.48c6.31-36,23.2-71.49,23.2-71.49s13,11.37,22,16S727.74,341.89,727.74,341.89Z" transform="translate(-51.34 -44.69)" fill="url(#18f7bdf6-b159-4951-801a-ccf90bc3291f)"/><path d="M475.73,828.55c-31.64,10-42.09,3.76-45.48-2.25a7,7,0,0,1,2.7-9.39,198.05,198.05,0,0,0,48-39.54c3.52-4,5.37-6.45,5.37-6.45s24.51-4.64,30.47,0c1.49,1.16,2.53,4.4,3.24,8.6,2.14,12.58,1.4,33.8,1.4,33.8S526.07,812.65,475.73,828.55Z" transform="translate(-51.34 -44.69)" fill="#5b5877"/><path d="M645.3,819.27s-.66,13.25-21.86,14.57-22.52-9.94-19.87-20.53c1.92-7.68,3.49-27.55,4.21-37.9.27-3.93.42-6.48.42-6.48s33.12-3.31,29.81,6a20.65,20.65,0,0,0-.56,7.56C638.31,796.12,645.3,819.27,645.3,819.27Z" transform="translate(-51.34 -44.69)" fill="#5b5877"/><path d="M520,779.52l-.59.68c-12.59,13.91-39.08,0-39.08,0l.59-2.82c3.52-4,5.37-6.45,5.37-6.45s24.51-4.64,30.47,0C518.29,772.08,519.33,775.32,520,779.52Z" transform="translate(-51.34 -44.69)" opacity="0.1"/><path d="M638,774.89a20.65,20.65,0,0,0-.56,7.56c-8.66,3-24-4.1-29.67-7,.27-3.93.42-6.48.42-6.48S641.33,765.62,638,774.89Z" transform="translate(-51.34 -44.69)" opacity="0.1"/><path d="M659.21,644.4c5.3,11.26-9.27,96-9.27,96s-.66,25.17-7.95,37.09-36.43-4.64-36.43-4.64,11.26-47,6.62-59.62S615.49,649,615.49,649s-13.91-51.67-11.92-65.58-10.6-59-10.6-59-29.15,86.78-43.06,99.36-11.26,39.08-11.26,39.08c11.26,31.13-12.59,78.83-12.59,78.83s6,23.18-6.62,37.09-39.08,0-39.08,0L489,737.8l6-87.44s3.31-24.51,6-68.23,19.87-92.74,19.87-92.74l2.88-20.18,2.42-16.92s134.47-4.64,137.78-5.3c.83-.17,1.25,4.89,1.29,12.86.15,23.77-3,73.43-7.92,87.82-6.62,19.21-.66,59-.66,59S653.91,633.14,659.21,644.4Z" transform="translate(-51.34 -44.69)" fill="#5f5d7e"/><g opacity="0.05"><path d="M585.69,524.5s-29.15,86.78-43.06,99.36-11.26,39.08-11.26,39.08c11.26,31.13-12.59,78.83-12.59,78.83s6,23.18-6.62,37.09a19,19,0,0,1-12.22,6c7,.73,14.39-.33,19.5-6,12.59-13.91,6.62-37.09,6.62-37.09s23.85-47.69,12.59-78.83c0,0-2.65-26.5,11.26-39.08,10.69-9.67,30.36-63.11,38.91-87.37C587.06,529.41,585.69,524.5,585.69,524.5Z" transform="translate(-51.34 -44.69)"/><path d="M656.56,606.64s-6-39.74.66-59c5-14.39,8.06-64.05,7.92-87.82,0-8-.46-13-1.29-12.86-.41.08-2.88.23-6.87.42.56,1.36.84,5.92.88,12.45.15,23.77-3,73.43-7.92,87.82-6.62,19.21-.66,59-.66,59s-2.65,26.5,2.65,37.76-9.27,96-9.27,96-.66,25.17-7.95,37.09a8.84,8.84,0,0,1-6.08,4c5.67.84,10.83.14,13.36-4,7.29-11.92,7.95-37.09,7.95-37.09s14.57-84.79,9.27-96S656.56,606.64,656.56,606.64Z" transform="translate(-51.34 -44.69)"/></g><path d="M639.34,219.8,634.7,265.5s-73.53,15.9-65.58-9.94c3.76-12.23,4-25.36,3.13-35.79-.23-2.82-.52-5.44-.85-7.79a111.52,111.52,0,0,0-2.28-12.06s57-43.06,54.32-13.91a47.46,47.46,0,0,0,1.05,16.47,28.24,28.24,0,0,0,4.2,9.21C633.38,218.31,639.34,219.8,639.34,219.8Z" transform="translate(-51.34 -44.69)" fill="#fdc2cc"/><path d="M624.5,202.49c-.53.72-1.09,1.43-1.66,2.11A39.09,39.09,0,0,1,571.4,212a111.52,111.52,0,0,0-2.28-12.06s57-43.06,54.32-13.91A47.46,47.46,0,0,0,624.5,202.49Z" transform="translate(-51.34 -44.69)" opacity="0.1"/><path d="M632.05,177.4a39.08,39.08,0,0,1-78.16,0c0-.5,0-1,0-1.5a39.08,39.08,0,0,1,78.13,1.5Z" transform="translate(-51.34 -44.69)" fill="#fdc2cc"/><path d="M665.14,459.87a21.3,21.3,0,0,1-13.88,8.33l-30.44,10.65-.07,0-9.23,3.23-3.87-9.52-4.74-11.68v21.2s-58.16,4-79.26-12.89l2.42-16.92s134.47-4.64,137.78-5.3C664.68,446.84,665.1,451.89,665.14,459.87Z" transform="translate(-51.34 -44.69)" opacity="0.1"/><path d="M639.34,219.8,634.7,265.5s-73.53,15.9-65.58-9.94c3.76-12.23,4-25.36,3.13-35.79,1.27,2.66,10.62,21.48,22.71,24.75h0a13.11,13.11,0,0,0,4.63.44,15.37,15.37,0,0,0,7.13-2.76c10.88-7.23,20-26.26,22-30.5C633.38,218.31,639.34,219.8,639.34,219.8Z" transform="translate(-51.34 -44.69)" opacity="0.1"/><path d="M762.55,357.58c-28.48,15.24-66.24,47-66.24,47s-27.82-9.94-20.53-23.18,47-39.08,47-39.08,2-7.95-6.62-12.59-21.2-15.9-21.2-15.9-29.81,64.25-23.85,107.31-19.87,45-19.87,45l-30.44,10.65-.07,0-9.23,3.23-3.87-9.52-4.74-11.68v21.2s-67.57,4.64-83.46-17.22c0,0,14.57-58.29,10.6-80.81s-8.61-135.79-8.61-135.79l50.67-25.5S582,242.33,595,245.86h0a13.11,13.11,0,0,0,4.63.44,15.37,15.37,0,0,0,7.13-2.76c12.27-8.15,22.35-31.35,22.35-31.35s22.85,14.1,45.19,18.45a32.1,32.1,0,0,1,17.1,9.2c2.42,2.53,5.26,5.44,8.26,8.45,8.61,8.61,68.23,66.24,68.23,66.24S791,342.34,762.55,357.58Z" transform="translate(-51.34 -44.69)" fill="#d39999"/><path d="M697,393.35l-8.7,9.21-2.56,2.72s-23.18,21.2-29.15,20.53-15.9-41.07-4-38.42c7.24,1.61,15.71-.93,21.23-3.18h0a56.17,56.17,0,0,0,5.92-2.78Z" transform="translate(-51.34 -44.69)" fill="#fdc2cc"/><path d="M632.05,177.4a38.9,38.9,0,0,1-9.22,25.21,5.64,5.64,0,0,1-5.25-2.51c-1.1-1.93-.64-4.35-1.37-6.43s-2.39-3.51-3.44-5.36c-2.66-4.66-1.54-11.72-6.41-14.22-2.24-1.14-4.95-.76-7.45-.34-4.91.81-9.85,2.42-14.69,3.09-5.52.78-10.49-2.81-15.94-2.89-4.86-.08-9.74,2.77-14.35,1.95a39.08,39.08,0,0,1,78.13,1.5Z" transform="translate(-51.34 -44.69)" opacity="0.1"/><path d="M598.91,171.1c2.5-.41,5.21-.8,7.45.35,4.87,2.49,3.75,9.55,6.41,14.21,1.05,1.85,2.75,3.36,3.45,5.36s.27,4.5,1.37,6.43c1.59,2.79,5.9,3.2,8.73,1.54s4.41-4.71,5.48-7.73c.94-2.66,1.73-5.6,4-7.34a8.48,8.48,0,0,0,2.19-1.79,5.4,5.4,0,0,0,.52-3.06c0-6.76-1.05-12,.48-18.55,2.45-10.56,4.69-23.78-3.07-31.61a26.85,26.85,0,0,0-14.62-7.48c-5-.82-12.36,6.16-17.42,6-12.87-.51-23.73-12.43-36-8.58a25.32,25.32,0,0,0-13.22,9.73c-6,8.84-5.46,20.26-4.59,30.81a3.9,3.9,0,0,0,.67,2.25c.45.54,1.18.83,1.62,1.38a3.41,3.41,0,0,1,.5,2.46,16.55,16.55,0,0,1-1.19,5,2.06,2.06,0,0,0-.18,1.8,1.82,1.82,0,0,0,1,.68c5,1.8,10.4-1.67,15.75-1.58s10.43,3.67,15.95,2.89C589.06,173.52,594,171.91,598.91,171.1Z" transform="translate(-51.34 -44.69)" fill="#865a61"/><path d="M620.83,476.86l-.07,0-9.57,3.56-3.54-9.85-15-41.82L595,245.86h0a13.11,13.11,0,0,0,4.63.44,15.37,15.37,0,0,0,7.13-2.76h0l-2.84,180Z" transform="translate(-51.34 -44.69)" opacity="0.05"/><circle cx="550.91" cy="208.23" r="1.99" fill="#fff"/><circle cx="546.93" cy="275.79" r="1.99" fill="#fff"/><circle cx="543.62" cy="346.01" r="1.99" fill="#fff"/><circle cx="547.6" cy="381.11" r="1.99" fill="#fff"/><polygon points="615.83 283.74 573.43 283.74 573.43 241.35 594.63 235.38 615.83 241.35 615.83 283.74" opacity="0.05"/><circle cx="548.92" cy="239.36" r="1.99" fill="#fff"/><circle cx="595.95" cy="241.35" r="1.99" fill="#fff"/><circle cx="544.95" cy="312.22" r="1.99" fill="#fff"/><path d="M530.71,241.66s-18.55,2.65-24.51,36.43-11.92,80.81-11.92,80.81S484.34,402.62,534,392l2.65-15.24s-5,17.55-3.64-17.55,1.66-58,1.66-58Z" transform="translate(-51.34 -44.69)" fill="#d39999"/><path d="M530.71,241.66s-18.55,2.65-24.51,36.43-11.92,80.81-11.92,80.81S484.34,402.62,534,392l2.65-15.24s-7.62,16.89-6.29-18.22,4.31-57.3,4.31-57.3Z" transform="translate(-51.34 -44.69)" opacity="0.05"/><path d="M697,393.35l-8.7,9.21c-12.37-5-14.77-18.11-14.77-18.11l.32-.24h0a56.17,56.17,0,0,0,5.92-2.78Z" transform="translate(-51.34 -44.69)" opacity="0.1"/><path d="M684.72,376.46l-9.89,7.33s3.27,17.84,21.81,19.83l7.95-13.91Z" transform="translate(-51.34 -44.69)" fill="#d39999"/><polygon points="349.25 235.77 433.13 160.96 471.52 205.63 537.4 202.23 557.37 243.53 494.65 325.45 465.27 280.82 395.39 286.8 349.25 235.77" fill="#f2f5fb"/><polygon points="550.42 243.63 528.35 272.3 504.8 302.9 493.92 317.05 468.75 277.89 442.35 280.21 399.37 283.98 367.35 248.57 356.34 236.4 401.01 196.56 434.57 166.64 451.86 186.76 470.36 208.29 488.84 207.34 531.8 205.12 548.57 239.8 550.42 243.63" fill="#dde0ed"/><polygon points="411.67 213.48 367.35 248.57 356.34 236.4 401.01 196.56 411.67 213.48" fill="#abb1d1"/><polygon points="462.23 239.33 458.74 217.34 435.42 189.97 451.86 186.76 470.36 208.29 488.84 207.34 495.62 233.53 462.69 242.2 462.23 239.33" fill="#abb1d1"/><polygon points="550.42 243.63 528.35 272.3 516.89 255.02 548.57 239.8 550.42 243.63" fill="#abb1d1"/><polygon points="504.8 302.9 493.92 317.05 468.75 277.89 442.35 280.21 437.56 247.1 462.23 239.33 465.19 261.95 481.88 264.54 504.8 302.9" fill="#abb1d1"/><path d="M508.88,293a.66.66,0,0,1-.64-.23,38.34,38.34,0,0,0-11.07-9.27.66.66,0,1,1,.64-1.16,39.67,39.67,0,0,1,11.45,9.59.66.66,0,0,1-.39,1.07Z" transform="translate(-51.34 -44.69)" fill="#d7666f"/><path d="M501,294.84a.66.66,0,0,1-.69-1l8.58-14.17a.66.66,0,0,1,1.13.69l-8.58,14.17A.66.66,0,0,1,501,294.84Z" transform="translate(-51.34 -44.69)" fill="#d7666f"/><polygon points="399.39 283.1 470.21 208.14 531.67 205.15 468.92 277.63 399.39 283.1" fill="#fff" opacity="0.1"/><path d="M512.16,364.16s16.56-40.63,24.51-36.41,31.13,29.55,15.24,40.63-27.16,16.36-27.16,16.36l-12.59-1.58Z" transform="translate(-51.34 -44.69)" fill="#fdc2cc"/><path d="M503.22,364.53s15.19-11.92,27.46,24.18l-11.57,1.66-13.25-7.95Z" transform="translate(-51.34 -44.69)" fill="#d39999"/><path d="M503.22,364.53s15.19-11.92,27.46,24.18l-11.57,1.66-13.25-7.95Z" transform="translate(-51.34 -44.69)" opacity="0.05"/>
                    </svg>
            </div>
        </div>
    );
}

export default PageNotFound;