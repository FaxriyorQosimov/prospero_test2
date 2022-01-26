import {createSlice} from '@reduxjs/toolkit'



const a = createSlice({
    name: 'reducer',
    initialState:{
       recommend: [
            {id: 1, img: '../../Magazine/Play-black.png', name: 'Food', title: 'For Chicken-Fried Steak, Too Much Is Just Enough',  active: true},
            {id: 2, name: 'Cars', title: 'Storm Has Car Dealers Doing Swift Business',  active: false},
            {id: 3, name: 'Movies', title: 'War Is Hell? In New Military Dramas, It’s One-Dimensional',  active: false},
            {id: 4, img: '../../Magazine/Play-black.png', name: 'NFL', title: '11 surprising stat rankings for active NFL players',  active: false},
            {id: 5, name: 'TechReviews', title: 'The bookcases you can buy online and assemble yourself',  active: false}
        ],
        comments: [
            {id: 1, bookmarkVizible: false, name: "Flights", title: 'Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines', body: 'Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.', commentCount: 342, likes: 830, date: 'Aug 6', img: '../../Magazine/image-1192.png', line: 'flowrs_main_line'},
            {id: 2, bookmarkVizible: false, name: "Food", title: 'Three Courses, 20 Euros: The Affordable Dining Renaissance in Paris', body: 'The Los Angeles area, for all of its culinary diversity, has not historically been thought of as a haven for bread lovers. The area has a reputation as a place where gluten fears to tread.', commentCount: 27, likes: 129, date: 'Oct 7', img:'../../Magazine/image-256.png', line: 'flowrs_main_line'},
            {id: 3, bookmarkVizible: false, title: "Watch the High-Flying Physics of a Plant’s Exploding Fruits", name: 'Science', body: 'Three undergradute physics majors and their professor worked out how the hairyflower wild petunia shoots tiny seeds more than 20 feet through the air', commentCount: 30, likes: 284, date: 'Oct 11', img: '../../Magazine/image-257.png', line: 'flowrs_main_line'},
            {id: 4, bookmarkVizible: false, name: "Health", title: 'How the Shape of Your Ears Affects What You Hear', body: 'We’re able to locate sound because our brains grasp the shape of our ears. When that shape changes, we need time and practice to adapt. Ears are a peculiarly individual piece of anatomy.', commentCount: 102, likes: '1,293', date: 'Oct 19', img: '../../Magazine/image-258.png', line: 'flowrs_main_line'},
            {id: 5, bookmarkVizible: false, name: "Science", title: 'Forests Protect the Climate. A Future With More Storms Would Mean Trouble.', body: 'With an increase in extreme weather expected in the years to come, forests could be changed permanently as the world continues to warm', commentCount: 5, likes: 82, date: 'Oct 22', img: '../../Magazine/image-259.png', line: 'flowrs_main_line'},
            {id: 6, bookmarkVizible: false, name: "Art & Design", title: 'New Contemporary Institute Reverberates in Richmond’s Historic Landscape', body: 'The center, which will open in April, takes a bold look at race and other social issues that still resonate in the region as well as the nation. A new Institute for Contemporary Art is set to open.', commentCount: 101, likes: 432, date: 'Oct 26', img: '../../Magazine/image-260.png', line: ''},
        
        ],
        recommended: [
            {id: 1, name: 'Office Meetings Leave the Office', title: '15 minuts ago', img:"../../Magazine/image-178.png"},
            {id: 2, name: 'Experimental Vocal Music in Brooklyn', title: '32 minuts ago', img:"../../Magazine/image-179.png"},
            {id: 3, name: 'Google’s Influence Over Think Tanks', title: '36 minuts ago', img:"./../Magazine/image-180.png"},
            {id:4, name: 'Homes for Sale in NYC and Connecticut', title: '53 minuts ago', img:"../../Magazine/image-181.png"},
            {id: 5, name: 'Are You There, Dad? It’s Me, Alice', title: '1 hour ago', img:"../../Magazine/image-182.png"},
            {id: 6, name: 'The New Punk Look: Lacy and Colorful', title: '1 hour ago', img:"../../Magazine/image-183.png"},
            {id: 7, name: 'Sunday Best in Harlem and Brooklyn', title: '2 hour ago', img:"../../Magazine/image-184.png"},
            {id: 8, name: 'Experimental Vocal Music in Brooklyn', title: '32 minuts ago', img:"../../Magazine/image-179.png"},
            {id: 9, name: 'Are You There, Dad? It’s Me, Alice', title: '1 hour ago', img:"../../Magazine/image-182.png"},
            {id: 10, name: 'Office Meetings Leave the Office', title: '15 minuts ago', img:"../../Magazine/image-178.png"},
            {id:11, name: 'Google’s Influence Over Think Tanks', title: '36 minuts ago', img:"./../Magazine/image-180.png"},
            {id: 12, name: 'The New Punk Look: Lacy and Colorful', title: '1 hour ago', img:"../../Magazine/image-183.png"},
            {id:13, name: 'Homes for Sale in NYC and Connecticut', title: '53 minuts ago', img:"../../Magazine/image-181.png"},
            {id: 14, name: 'Are You There, Dad? It’s Me, Alice', title: '1 hour ago', img:"../../Magazine/image-182.png"},
            {id: 15, name: 'Sunday Best in Harlem and Brooklyn', title: '2 hour ago', img:"../../Magazine/image-184.png"},
        ]
    },
    reducers: {
        changeBookmark: (state, action) => {
            state.comments = action.payload
        }
    }
})

export const {changeBookmark} = a.actions
export default a.reducer