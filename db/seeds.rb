# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Tag.create(name: 'happy', emoji_name: 'smiley')
Tag.create(name: 'sad', emoji_name: 'disappointed')
Tag.create(name: 'angry', emoji_name: 'angry')
Tag.create(name: 'worried', emoji_name: 'worried')
Tag.create(name: 'groovy', emoji_name: 'relieved')
Tag.create(name: 'lovey-dovey', emoji_name: 'heart_eyes')
Tag.create(name: 'triumphant', emoji_name: 'triumph')
Tag.create(name: 'sly', emoji_name: 'smirk')

Song.create(title: 'Like A Rolling Stone', lyrics: "Once upon a time you dressed so fine
You threw the bums a dime in your prime, didn't you ?
People'd call, say, 'Beware doll, you're bound to fall'
You thought they were all kiddin' you
You used to laugh about
Everybody that was hangin' out
Now you don't talk so loud
Now you don't seem so proud
About having to be scrounging for your next meal.

How does it feel
How does it feel
To be without a home
Like a complete unknown
Like a rolling stone ?

You've gone to the finest school all right, Miss Lonely
But you know you only used to get juiced in it
And nobody has ever taught you how to live on the street
And now you find out you're gonna have to get used to it
You said you'd never compromise
With the mystery tramp, but know you realize
He's not selling any alibis
As you stare into the vacuum of his eyes
And say do you want to make a deal? 

How does it feel
How does it feel
To be on your own
With no direction home
Like a complete unknown
Like a rolling stone ?
You never turned around to see the frowns on the jugglers and the clowns
When they all come down and did tricks for you
You never understood that it ain't no good
You shouldn't let other people get your kicks for you
You used to ride on the chrome horse with your diplomat
Who carried on his shoulder a Siamese cat
Ain't it hard when you discover that
He really wasn't where it's at
After he took from you everything he could steal.

How does it feel
How does it feel
To be on your own
With no direction home
Like a complete unknown
Like a rolling stone ?

Princess on the steeple and all the pretty people
They're drinkin', thinkin' that they got it made
Exchanging all precious gifts 
But you'd better take your diamond ring, you'd better pawn it babe
You used to be so amused
At Napoleon in rags and the language that he used
Go to him now, he calls you, you can't refuse
When you got nothing, you got nothing to lose
You're invisible now, you got no secrets to conceal.

How does it feel
How does it feel
To be on your own 
With no direction home
Like a complete unknown
Like a rolling stone ?", artist_id: 0)

Song.create(title: "Blowin' In The Wind", lyrics: "How many roads must a man walk down
Before you call him a man?
How many seas must a white dove sail
Before she sleeps in the sand?
Yes, how many times must the cannon balls fly
Before they're forever banned?
The answer my friend is blowin' in the wind
The answer is blowin' in the wind.

Yes, how many years can a mountain exist
Before it's washed to the sea?
Yes, how many years can some people exist
Before they're allowed to be free?
Yes, how many times can a man turn his head
Pretending he just doesn't see?
The answer my friend is blowin' in the wind
The answer is blowin' in the wind.

Yes, how many times must a man look up
Before he can really see the sky?
Yes, how many ears must one man have
Before he can hear people cry?
Yes, how many deaths will it take till he knows
That too many people have died?
The answer my friend is blowin' in the wind
The answer is blowin' in the wind.", artist_id: 0)

Song.create(title: "It's All Over Now, Baby Blue", lyrics: "You must leave now, take what you need, you think will last
But whatever you wish to keep, you better grab it fast
Yonder stands your orphan with his gun
Crying like a fire in the sun
Look out the saints are comin' through
And it's all over now, Baby Blue.

The highway is for gamblers, better use your sense
Take what you have gathered from coincidence
The empty handed painter from your streets
Is drawing crazy patterns on your sheets
This sky, too, is folding under you
And it's all over now, Baby Blue.

All your seasick sailors, they are rowing home
Your empty handed armies, are all going home
Your lover who just walked out the door
Has taken all his blankets from the floor
The carpet, too, is moving under you
And it's all over now, Baby Blue.

Leave your stepping stones behind, something calls for you
Forget the dead you've left, they will not follow you
The vagabond who's rapping at your door
Is standing in the clothes that you once wore
Strike another match, go start a new
And it's all over now, Baby Blue.
", artist_id: 0)

Song.create(title: 'Subterranean Homesick Blues', lyrics: "Johnny's in the basement
Mixing up the medicine
I'm on the pavement
Thinking about the government
The man in the trench coat
Badge out, laid off
Says he's got a bad cough
Wants to get it paid off
Look out kid
It's somethin' you did
God knows when
But you're doin' it again
You better duck down the alley way
Lookin' for a new friend
The man in the coon-skip cap
In the big pen
Wants eleven dollar bills
You only got ten.

Maggie comes fleet foot
Face full of black soot
Talkin' that the heat put
Plants in the bed but
The phone's tapped anyway
Maggie says that many say
They must bust in early May
Orders from the DA
Look out kid
Don't matter what you did
Walk on your tip toes
Don't try, 'No Doz'
Better stay away from those
That carry around a fire hose
Keep a clean nose
Watch the plain clothes
You don't need a weather man
To know which way the wind blows.

Get sick, get well
Hang around an ink well
Ring bell, hard to tell
If anything is goin' to sell
Try hard, get barred
Get back, write Braille
Get jailed, jump bail Join the army, if you failed
Look out kid
You're gonna get hit
But losers, cheaters
Six-time users
Hang around the theaters
Girl by the whirlpool
Lookin' for a new fool
Don't follow leaders
Watch the parkin' meters.

Ah get born, keep warm
Short pants, romance, learn to dance
Get dressed, get blessed
Try to be a success
Please her, please him, buy gifts
Don't steal, don't lift
Twenty years of schoolin'
And they put you on the day shift
Look out kid
They keep it all hid
Better jump down a manhole
Light yourself a candle
Don't wear sandals
Try to avoid the scandals
Don't wanna be a bum
You better chew gum
The pump don't work
'Cause the vandals took the handles.
", artist_id: 0)

Song.create(title: 'Yesterday', lyrics: "Yesterday, all my troubles seemed so far away
Now it looks as though they're here to stay
oh, I believe in yesterday

Suddenly There's a shadow hanging over me
I'm not half the man I used to be
Oh, yesterday came suddenly.

Why she had to go?
I don't know, she wouldn't say
I said something wrong
Now I long for yesterday.

Yesterday love was such an easy game to play
Now I need a place to hide away
Oh, I believe in yesterday.

Why she had to go?
I don't know, she wouldn't say
I said something wrong
Now I long for yesterday.

Yesterday love was such an easy game to play
Now I need a place to hide away
Oh, I believe in yesterday...", artist_id: 0)

Song.create(title: 'Julia', lyrics: "Half of what I say is meaningless
But I say it just to reach you, Julia

Julia, Julia, oceanchild, calls me
So I sing a song of love, Julia
Julia, seashell eyes, windy smile, calls me
So I sing a song of love, Julia

Her hair of floating sky is shimmering, glimmering
In the sun

Julia, Julia, morning moon, touch me
So I sing a song of love, Julia

When I cannot sing my heart
I can only speak my mind, Julia

Julia, sleeping sand, silent cloud, touch me
So I sing a song of love, Julia
Hum hum hum hum... calls me
So I sing a song of love for Julia, Julia, Julia", artist_id: 0)

Song.create(title: 'I Am The Walrus', lyrics: "I am he as you are he as you are me
And we are all together
See how they run like pigs from a gun see how they fly
I'm crying

Sitting on a cornflake waiting for the van to come
Corporation teeshirt, stupid bloody Tuesday
Man you been a naughty boy. You let your face grow long
I am the eggman, they are the eggmen
I am the walrus, goo goo goo joob

Mister City Policeman sitting, pretty little policemen in a row
See how they fly like Lucy in the sky, see how they run
I'm crying, I'm crying
I'm crying, I'm crying

Yellow matter custard dripping from a dead dog's eye
Crabalocker fishwife pornographic priestess
Boy you been a naughty girl, you let your knickers down
I am the eggman, they are the eggmen
I am the walrus, goo goo goo joob

Sitting in an English garden waiting for the sun
If the sun don't come
You get a tan from standing in the English rain
I am the eggman, they are the eggmen
I am the walrus, goo goo goo joob goo goo goo goo joob

Expert textpert choking smokers
Don't you think the joker laughs at you?
See how they smile like pigs in a sty, see how they snied
I'm crying

Semolina pilchard climbing up the Eiffel Tower
Elementary penguin singing Hare Krishna
Man you should have seen them kicking Edgar Alan Poe
I am the eggman, they are the eggmen
I am the walrus, goo goo goo joob goo goo goo joob
Goo goo goo joob goo goo goo joob
Goo gooooooooooo jooba jooba jooba jooba jooba jooba
Jooba jooba
Jooba jooba
Jooba jooba
", artist_id: 0)

Song.create(title: 'A Day In The Life', lyrics: "I read the news today oh boy
About a lucky man who made the grade
And though the news was rather sad
Well I just had to laugh
I saw the photograph
He blew his mind out in a car
He didn't notice that the lights had changed
A crowd of people stood and stared
They'd seen his face before
Nobody was really sure
If he was from the House of Lords
I saw a film today oh boy
The English Army had just won the war
A crowd of people turned away
But I just had to look
Having read the book
I'd love to turn you on

Woke up, fell out of bed
Dragged a comb across my head
Found my way downstairs and drank a cup
And looking up I noticed I was late
Found my coat and grabbed my hat
Made the bus in seconds flat
Found my way upstairs and had a smoke
And somebody spoke and I went into a dream

I read the news today oh boy
Four thousand holes in Blackburn, Lancashire
And though the holes were rather small
They had to count them all
Now they know how many holes it takes to fill the Albert Hall
I'd love to turn you on", artist_id: 0)

User.create(email: "jonathan@email", password_digest: "$2a$10$6D3GRAZxzyK5jT0o4o8Nnu9dcQSdr3xr8R2aPXP452QyQdZut2ryW",
session_token: "xGrO-E9dBsDxmYmztDIcNQ", bio: nil)

User.create(email: "guest", password_digest: "$2a$10$yuz99l/Rax5tNErh4WKlVu.vxoEUEIkJnfN9vvgi9qc1sqdT5hIM2",
session_token: "NvQK1sfxr5Ut9cbq343oAA", bio: nil)

Tagging.create(segment_id: 1, tag_id: 4, user_id: 1)
Tagging.create(segment_id: 1, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 1, tag_id: 4, user_id: 1)
Tagging.create(segment_id: 2, tag_id: 4, user_id: 1)
Tagging.create(segment_id: 2, tag_id: 4, user_id: 1)
Tagging.create(segment_id: 2, tag_id: 4, user_id: 1)
Tagging.create(segment_id: 3, tag_id: 7, user_id: 1)
Tagging.create(segment_id: 3, tag_id: 3, user_id: 1)
Tagging.create(segment_id: 3, tag_id: 3, user_id: 1)
Tagging.create(segment_id: 4, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 4, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 4, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 5, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 5, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 5, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 5, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 6, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 6, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 6, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 6, tag_id: 3, user_id: 1)
Tagging.create(segment_id: 6, tag_id: 3, user_id: 1)
Tagging.create(segment_id: 6, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 7, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 7, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 7, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 7, tag_id: 4, user_id: 1)
Tagging.create(segment_id: 7, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 7, tag_id: 4, user_id: 1)
Tagging.create(segment_id: 7, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 7, tag_id: 3, user_id: 1)
Tagging.create(segment_id: 8, tag_id: 3, user_id: 1)
Tagging.create(segment_id: 8, tag_id: 4, user_id: 1)
Tagging.create(segment_id: 8, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 8, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 8, tag_id: 3, user_id: 1)
Tagging.create(segment_id: 8, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 10, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 10, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 10, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 10, tag_id: 4, user_id: 1)
Tagging.create(segment_id: 10, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 10, tag_id: 3, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 1, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 2, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 11, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 12, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 12, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 12, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 13, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 13, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 13, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 13, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 13, tag_id: 6, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)
Tagging.create(segment_id: 9, tag_id: 5, user_id: 1)

Segment.create(song_id: 1, quote: "Once upon a time you dressed so fine
You threw the bums a dime in your prime, didn't you ?", start_idx: 0, end_idx: 90)
Segment.create(song_id: 1, quote: "People'd call, say, 'Beware doll, you're bound to fall'
You thought they were all kiddin' you", start_idx: 91, end_idx: 184)
Segment.create(song_id: 1, quote: "How does it feel
How does it feel", start_idx: 346, end_idx: 379)
Segment.create(song_id: 1, quote: "To be without a home
Like a complete unknown", start_idx: 380, end_idx: 424)
Segment.create(song_id: 2, quote: "The answer my friend is blowin' in the wind
The answer is blowin' in the wind.", start_idx: 208, end_idx: 286)
Segment.create(song_id: 2, quote: "Yes, how many deaths will it take till he knows
That too many people have died?", start_idx: 734, end_idx: 813)
Segment.create(song_id: 4, quote: "Johnny's in the basement
Mixing up the medicine
I'm on the pavement
Thinking about the government", start_idx: 0, end_idx: 97)
Segment.create(song_id: 4, quote: "Twenty years of schoolin'
And they put you on the day shift", start_idx: 1405, end_idx: 1464)
Segment.create(song_id: 7, quote: "I am he as you are he as you are me
And we are all together", start_idx: 0, end_idx: 59)
Segment.create(song_id: 7, quote: "Elementary penguin singing Hare Krishna
Man you should have seen them kicking Edgar Alan Poe", start_idx: 1144, end_idx: 1236)
Segment.create(song_id: 6, quote: "Half of what I say is meaningless
But I say it just to reach you, Julia", start_idx: 0, end_idx: 71)
Segment.create(song_id: 6, quote: "So I sing a song of love, Julia", start_idx: 108, end_idx: 139)
Segment.create(song_id: 6, quote: "When I cannot sing my heart
I can only speak my mind, Julia", start_idx: 350, end_idx: 410)

