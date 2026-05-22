import Memory from "./Memory.js";
import ShootingStar from "./ShootingStar.js";
import BackgroundStar from "./BackgroundStar.js";
import Sparkle from "./Sparkle.js";

export default class UniverseApp {constructor() {this.introScreen = document.getElementById("intro");this.universeScreen = document.getElementById("universe");

    this.enterBtn = document.getElementById("enterBtn");
    this.moon = document.getElementById("moon");

    this.popup = document.getElementById("popup");
    this.closePopupBtn = document.getElementById("closePopup");

    this.memoryTitle = document.getElementById("memoryTitle");
    this.memoryDate = document.getElementById("memoryDate");
    this.memoryMessage = document.getElementById("memoryMessage");
    if (this.monthsaryInterval) {
    clearInterval(this.monthsaryInterval);
    this.monthsaryInterval = null;
}

setTimeout(() => {
    if (document.getElementById("monthsaryCountdown")) {
        this.startMonthsaryCountdown();
    }
}, 0);
    this.photoBox = document.getElementById("photoBox");

    this.videoBox = document.getElementById("videoBox");
    this.memoryVideo = document.getElementById("memoryVideo");
    this.memoryVideoSource = this.memoryVideo.querySelector("source");

    this.dedicationBox = document.getElementById("dedicationBox");
    this.dedicationText = document.getElementById("dedicationText");

    this.backgroundStarsContainer = document.getElementById("backgroundStars");
    this.sparklesContainer = document.getElementById("sparkles");
    this.shootingStarsContainer = document.getElementById("shootingStarsContainer");
    this.backgroundMusic = document.getElementById("backgroundMusic");

    this.memories = [];
    this.monthsaryInterval = null;
}

start() {
    this.createMemories();
    this.createBackgroundStars();
    this.createSparkles();
    this.createShootingStars();
    this.addEventListeners();
}

createMemories() {
    this.memories = [
        new Memory(
            "The Day You Said Yes",
            "March 26, 2024",
            `
            <div class="memory-letter">
                <p class="letter-opening">
                    Our first official date happened on the very same day you said yes to me.
                    For me, that day will always be one of the happiest days of my life.
                </p>

                <p>
                    It was the kind of moment that quietly changes everything. At first, you do not fully realize how important it is,
                    but when you look back, you understand that from that single day, life slowly became softer, brighter, and better.
                    Who would have thought that everything beautiful between us would begin right there?
                </p>

                <p>
                    That day, March 26, 2024, I woke up already filled with excitement. From the moment morning came,
                    I could not wait to see you. I could not wait to spend time with you. It was also the first time we were going out
                    with just the two of us. No friends, no other people around, no distractions. Just you and me.
                </p>

                <p>
                    Even before the day fully started, I already had one clear goal in my heart. I wanted to ask you if you were finally
                    ready for the next step in our relationship.
                </p>

                <div class="letter-divider">✦</div>

                <p>
                    But before everything even happened, I ran into a problem that almost ruined the whole day for me.
                    The money I had carefully saved for a long time, the money I was supposed to cash out that day,
                    was accidentally sent to someone else. I panicked.
                </p>

                <p>
                    By that time, you were already on your way, and I was about to leave too. My hands were shaking.
                    My mind was racing. I kept thinking about what I could possibly do if things did not get fixed.
                    I was scared that everything I had planned would fall apart before it even began.
                </p>

                <p>
                    Thankfully, the money was returned to me. It felt like the universe was quietly telling me,
                    <span class="soft-highlight">tuloy lang</span>. As if everything was still meant to happen.
                    As if that day was not supposed to be stopped by fear, panic, or any mistake.
                </p>

                <p>
                    We were supposed to meet at SM, watch a movie, and eat together afterward. Simple, familiar, and safe.
                    But you had a better plan, something unexpected, something I did not see coming.
                    And in the end, it became the perfect moment. It became the opening my heart needed for the question I had been holding for so long.
                </p>

                <div class="memory-quote">
                    “Naniniwala ka ba sa ligaw?”
                </div>

                <p>
                    While I was holding you, with my arms wrapped around you, I asked you that question softly.
                    You answered, <span class="soft-highlight">“Hindi.”</span>
                </p>

                <p>
                    In that moment, my heart almost stopped. I felt nervous. I felt scared.
                    My mind started asking so many questions all at once. Bakit hindi ang sagot niya?
                    Eto na ba iyon? Ayaw niya ba sa akin? I tried to prepare myself for disappointment,
                    even though deep inside, I was hoping with everything in me that the day would not end that way.
                </p>

                <p>
                    But then, without hesitation, without any unnecessary pause, you said the words that changed everything.
                </p>

                <div class="yes-moment">
                    “Tayo na.”
                </div>

                <p>
                    I do not think I will ever forget how happy I felt in that exact moment.
                    It was simple, but to me, it meant everything. It felt like my heart had been holding its breath for so long,
                    and finally, it could breathe.
                </p>

                <p>
                    I went home that night with a smile I could not hide. I could not sit still. I could not calm myself down.
                    My heart was so full that even the silence felt loud with happiness.
                </p>

                <div class="letter-divider">✦</div>

                <p>
                    That was the day my life truly changed. That was the day a new chapter began.
                    A chapter I never want to forget. A chapter that started with nervousness, hope, fear,
                    and then the most beautiful answer I could have ever received from you.
                </p>

                <p>
                    Looking back now, it feels so good to revisit that memory. Especially the part where we kept it just between us.
                    That quiet, precious first month when we were already officially together, but we chose to keep it ours alone.
                    No one else knew. It was just you and me, as if we had our own little world, our own secret,
                    our own universe that no one else could touch.
                </p>

                <p>
                    And maybe that is one of the reasons why it still feels so special to me. Because before anyone else knew,
                    before the world had anything to say, before anyone could see what we had, it was already real.
                    It was already ours. We had each other, and at that time, that was more than enough.
                </p>

                <p class="letter-ending">
                    March 26, 2024 will always be a day I will hold close to my heart.
                    Not just because it was the day you said yes, but because it was the day I felt that my heart had finally found
                    someone worth choosing every day.
                </p>

                <p class="letter-ending">
                    If I could go back to that day, I would choose it again. I would choose the nervousness, the panic,
                    the waiting, the fear, and the overwhelming happiness after. Because all of it led me to the moment you became mine,
                    and I became yours.
                </p>
            </div>
            `,
            "",
            ""
        ),

       new Memory(
"Favorite Trip",
"The Baguio trip",
`
<div class="memory-letter">

    <p class="letter-opening">
        This will always be one of my favorite memories with you.
        Whenever I think about our Baguio trip, my heart still feels full.
        It was not just a simple trip for me. It was one of those memories I know I will keep going back to,
        over and over again, because of how special it was to share it with you.
    </p>

    <p>
        I still remember that moment when you were already on your way to Baguio.
        Noong paalis ka na, nalulungkot ako, because I really thought I would not get to be with you there.
        I remember feeling that heaviness in my chest, thinking that maybe I would just have to stay behind
        and miss everything from afar. I honestly thought I would not be able to come with you anymore,
        and that thought alone already made me so sad.
    </p>

    <p>
        Buti na lang talaga at pumayag ka kaagad na sundan na kita sa Baguio that same day.
        Until now, I still feel so grateful whenever I remember that.
        It may have seemed like a simple decision, but for me, it meant so much.
        It gave me the chance to be with you, to make memories with you, and to turn what could have been
        a sad day into one of the happiest and warmest memories I have ever had with you.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        Thinking about it now, ramdam na ramdam ko pa rin ang lamig ng Baguio,
        but even more than the cold, I remember the warmth of being with you there.
        I remember how happy I was through every little adventure we had.
        The city itself was beautiful, but what made it unforgettable for me was the fact that I got to experience it with you.
    </p>

    <p>
        I always smile when I remember our late-night walk papuntang Burnham Park.
        There was something so peaceful and so special about that moment.
        Just walking beside you at night, feeling the cold Baguio air, and enjoying the food trip together
        made everything feel so light and so comforting.
        It is one of those simple moments that may not look grand to other people,
        but for me, it felt so beautiful because it was ours.
    </p>

    <p>
        I also remember our walk going to Mines View Park and then pababa sa The Mansion.
        Those walks became part of the charm of that trip for me.
        Even the pagod felt worth it because every step meant more time with you,
        more memories with you, and more moments I could keep in my heart.
    </p>

    <div class="memory-quote">
        “I would never get tired of following you, as long as it means I get to be with you.”
    </div>

    <p>
        I will also never forget the breakfast we had sa gilid ng Mines View.
        It may sound like such a small thing, but memories like that stay with me.
        There is something about simple meals, cold mornings, and being with the person you love
        that makes a moment feel so complete.
        It was not only about the food. It was about how happy and content I felt in that moment,
        knowing I was there with you.
    </p>

    <p>
        Of course, I also remember us buying pasalubong together.
        Even those little errands became fun because I was doing them with you.
        That is one of the things I love most about us.
        Even the simplest activities become meaningful when I am with you.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        One thing I truly learned from this trip is that hinding hindi ako mapapagod na sundan ka.
        Despite the long commute hours paakyat ng Baguio, not even once did I think of complaining.
        Ni isang thought ay hindi dumaan sa isip ko na dumaing o magreklamo.
        Because for the chance to be with you, to explore a new place with you,
        and to try new things with you, every hour, every pagod, and every effort was worth it.
    </p>

    <p>
        I realized during this trip that as long as you are with me, I can endure so much more than I think I can.
        The long ride, the cold weather, the walking, the tiredness, all of it became lighter because I was with you.
        And that is the beautiful thing about loving you.
        You make difficult things feel easier.
        You make tiring moments feel meaningful.
        You make even an exhausting trip feel like somewhere my heart would gladly return to again and again.
    </p>

    <p>
        Kahit ano pa yan, gagawin ko basta kasama kita.
        I would take the long rides, the cold mornings, the tired feet, and the sleepless moments all over again,
        as long as it means I get to be beside you and make memories like this with you.
    </p>

    <p class="letter-ending">
        This Baguio trip will always stay close to my heart, not only because of the places we went to,
        but because it reminded me how happy I am when I am with you.
        It reminded me that no matter how far the place is, no matter how long the trip may be,
        being with you will always make everything worth it.
    </p>

    <p class="letter-ending">
        If I had the chance to relive this memory, I would choose it again in a heartbeat.
        I would still follow you to Baguio.
        I would still choose the long ride, the cold breeze, the walks, the food trips, the pasalubong,
        and every little adventure in between.
        Because in the end, my favorite part of that trip was never just Baguio itself.
        It was you.
    </p>

</div>
`,
[
    "images/baguio-trip-1.jpg",
    "images/baguio-trip-2.jpg",
    "images/baguio-trip-3.jpg"
],
""

),

      new Memory(
"Cheers To More Adventures",
"For all the roads I want to take with you",
`
<div class="memory-letter adventure-letter">

    <p class="letter-opening">
        Asawa ko, one of the happiest thoughts that lives in my heart is this:
        cheers to more gala and adventures with you.
        Out of all the things I can dream about, one of my favorites is imagining more days with you,
        more places to see, more roads to take, more memories to make, and more moments where I get to say,
        “Buti na lang, kasama kita.”
    </p>

    <div class="travel-quote">
        “Kahit saan man dalhin ng mga paa, basta kasama ka.”
    </div>

    <p>
        There is something so special about the idea of going somewhere with you.
        It is not only about the place itself.
        It is not only about the destination, the view, or the plan.
        It is about the feeling of being with you while life keeps moving.
        It is about the joy of knowing that wherever the road takes us,
        I get to experience it with the person I love.
    </p>

    <p>
        Honestly, even the simplest gala becomes special when I am with you.
        A walk, a commute, a food trip, a spontaneous lakad, a random stop somewhere,
        or even just standing side by side while deciding where to go next.
        Those things may look ordinary to other people,
        but to me, they become memories worth keeping because they happen with you.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        I want more of those moments with you.
        More late walks.
        More road trips.
        More unexpected adventures.
        More laughing over small things.
        More pictures that we will look back on someday and smile at.
        More days where our feet get tired but our hearts feel full.
        More places where we can leave little pieces of our story.
    </p>

    <p>
        I want more memories where we are simply side by side,
        figuring things out, enjoying the moment, and letting the day unfold in its own beautiful way.
        Because for me, the best part of any adventure is never just the place.
        It is always the fact that I get to share it with you.
    </p>

    <div class="section-promise">
        “Some of my favorite dreams are the ones where I get to keep exploring life with you.”
    </div>

    <p>
        When I think of us, I do not only think of grand plans.
        I also think of the soft and simple adventures.
        The kind where we are just together and that already feels enough.
        The kind where even silence feels warm.
        The kind where even tired feet feel worth it because at the end of the day,
        I know I spent it beside you.
    </p>

    <p>
        Your presence makes everything feel lighter.
        A place becomes more beautiful because you are there.
        A moment becomes more meaningful because I get to share it with you.
        Even the smallest trip can feel like something unforgettable when my hand is close to yours
        and my heart knows that I am exactly where I want to be.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        Looking at a picture like ours, with our feet near the heart in the sand,
        I cannot help but think about how beautiful it is to walk through life with someone you truly love.
        It feels simple, but it says so much.
        It feels like a quiet reminder that love is not only found in big declarations.
        Sometimes, it is found in walking side by side,
        in choosing the same direction,
        and in leaving traces of your story wherever life takes you.
    </p>

    <p>
        That is why I want to say this from the heart:
        cheers to more adventures with you.
        Cheers to more places.
        Cheers to more memories.
        Cheers to more roads we have not taken yet.
        Cheers to more laughter, more stories, more discoveries, and more beautiful moments
        that we will one day look back on with grateful hearts.
    </p>

    <div class="dream-quote">
        “I do not just want to go places. I want to go through life with you, one memory at a time.”
    </div>

    <p>
        I hope we get to visit the places we dream about.
        I hope we get to wander, explore, and keep collecting moments that will stay in our hearts.
        I hope we get to be the kind of love that keeps making memories together,
        not only in big adventures, but even in the quiet little gala that unexpectedly become unforgettable.
    </p>

    <p>
        And if there is one thing I know for sure, it is this:
        as long as I am with you, the journey already feels worth it.
        The road feels softer.
        The place feels brighter.
        The day feels more meaningful.
        Because your presence has a way of turning simple moments into something my heart never wants to lose.
    </p>

    <div class="letter-divider">✦</div>

    <p class="letter-ending">
       Kaya My Baby, here is to more adventures with you.
        More roads, more laughter, more stories, more heartbeats, and more memories that we will keep forever.
        Wherever life takes us, I hope we keep walking through it side by side.
        And wherever our feet may go, I hope they always carry us toward moments we can call ours.
    </p>

    <p class="letter-ending">
        Cheers to more gala with you.
        Cheers to more beautiful days.
        Cheers to more places we have yet to see.
        And most of all, cheers to a love that keeps moving forward together,
        with soft hearts, grateful souls, and feet willing to walk anywhere,
        basta kasama ka.
    </p>

</div>
`,
"images/adventures-together.jpg",
""

),

        new Memory(
"Our First Trip to Manila Together",
"Our first official staycation together",
`
<div class="memory-letter">

    <p class="letter-opening">
        Palagi kong babalik-balikan ang memory na ito, because this was our first official trip and staycation together.
        It was one of those memories that feels so alive in my heart, as if no matter how much time passes,
        I can still return to it and feel the same happiness all over again.
    </p>

    <p>
        I still remember so clearly how everything felt during that trip. I remember the excitement,
        the pagod, the little struggles, the laughter, and most of all, the feeling of being with you through all of it.
        It was not just special because we went to Manila. It was special because every moment of that trip,
        no matter how simple or stressful, became beautiful because I was with you.
    </p>

    <p>
        Alalang-alala ko pa noon kung gaano tayo kahirap hanapin ang Anonas at ang Airbnb natin.
        We were figuring everything out together, trying to get to the right place,
        carrying our things, probably tired already, but even that became something I now look back on with a smile.
        What could have been a frustrating experience became a precious memory,
        because I was sharing it with you.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        I also remember how you took me around Gateway Mall.
        It may seem like a simple thing, but to me, it felt so special.
        There was something so comforting and so exciting about walking around with you,
        exploring together, and just enjoying each other’s company.
        Even ordinary places become unforgettable when I am with you.
    </p>

    <p>
        Then of course, the next day, we went to Enchanted Kingdom.
        I will always remember that part of our trip because it felt like such a pure and happy moment for us.
        It was one of those days where all you really want to do is enjoy the moment and keep it in your heart forever.
        Being there with you made it even more magical.
    </p>

    <div class="memory-quote">
        “Some of the best memories are the ones where we were simply together.”
    </div>

    <p>
        After Enchanted Kingdom, I still remember how hard it was for us to find a place to stay.
        Pagod na tayo noon, and I know we were both probably drained already,
        but somehow we still managed to go through it together.
        And that is one of the reasons why this memory means so much to me.
        It was not perfect, it was not effortless, but it was real.
        We experienced the tiring parts, the difficult parts, and the uncertain parts together.
    </p>

    <p>
        Then came our last day. Despite the pagod, despite the dami ng dala,
        despite how heavy our bodies probably felt by then, we still found a way to enjoy ourselves.
        We still explored. We still smiled. We still made the most of the day as we went around MOA.
        That part stays with me because it reminds me that being with you makes even exhaustion feel lighter.
        Kahit pagod na pagod na tayo, there was still happiness, because we were together.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        When I look back at this trip, I do not only remember the places.
        I remember the feeling of having you beside me through every part of it.
        I remember the comfort of your presence.
        I remember how even the little problems along the way became part of a memory I now treasure deeply.
        I remember how safe and happy I felt knowing that I was making these memories with you.
    </p>

    <p>
        This trip will always have a special place in my heart because it was our first official staycation together.
        It felt like a chapter that was fully ours.
        A chapter filled with excitement, adventure, tired feet, laughter, little struggles, and unforgettable moments.
        It may not have been perfect in the usual sense, but to me, it was beautiful.
        And maybe that is what made it even more meaningful.
    </p>

    <p class="letter-ending">
        Out of all the memories I hold close, this will always be one of my favorites.
        Because in that trip, I was reminded that no matter where we go, what we do, or how difficult the day may become,
        being with you is what makes everything worth remembering.
    </p>

    <p class="letter-ending">
        If I could relive one memory just to feel it all again, this would definitely be one of the first I would choose.
        Our first Manila trip, our first official staycation, our little adventure together,
        and one of the moments that made me fall even more deeply in love with you.
    </p>

</div>
`,
[
    "images/manila-trip-1.jpg",
    "images/manila-trip-2.jpg",
    "images/manila-trip-3.jpg",
    "images/manila-trip-4.jpg"
],
""

),

       new Memory(
"A Promise",
"For the life I want to build with you",
`
<div class="memory-letter promise-letter marriage-promise-letter">

    <p class="letter-opening">
        My love, this is one of the deepest promises I will ever make to you.
        Not just a promise for today, and not just a promise made because the moment feels soft and beautiful,
        but a promise that comes from the part of my heart that is already dreaming of a whole life with you.
        When Mahal na Mahal Kita, I do not only mean that I love you now.
        I mean that I want to keep loving you in the days to come, in the years ahead,
        and in the future I hope to build with you.
    </p>

    <div class="vow-quote">
        <span>Ad astra, per aspera</span>
        <small>To the stars, through hardships</small>
    </div>

    <p>
        I want to keep this phrase here because it reminds me of the kind of love I want us to have.
        A love that does not give up just because the road becomes hard.
        A love that keeps reaching for something beautiful, even when the journey is not always easy.
        I know that the future will not always be perfect.
        There will be tiring days, difficult seasons, and moments that will test our patience and strength.
        But if the life we dream of is the star we are trying to reach,
        then I want to reach it with you, no matter how long the road becomes.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        My baby, I promise you this.
        <span class="soft-highlight">Papakasalan kita.</span>
        I do not say that lightly.
        I say it with sincerity, with intention, and with a heart that truly sees you as the person I want beside me in this life.
        I want the day to come when I can stand in front of you, look into your eyes,
        and promise before God, before life, and before everything that matters,
        that I will love you, choose you, protect you, and stay with you.
    </p>

    <p>
        I promise to love you and cherish you.
        I promise to hold your heart gently.
        I promise to treasure not only the happy and beautiful parts of you,
        but also the tired parts, the quiet parts, the hurting parts,
        and the parts of you that still need rest and understanding.
        I want to love you in a way that feels safe.
        In a way that feels steady.
        In a way that makes you feel that your heart has finally found a home where it can rest without fear.
    </p>

    <div class="section-promise">
        “I promise to love you not only in beautiful moments, but also in the ordinary, difficult, and quiet days that truly make a life together.”
    </div>

    <p>
        I promise to give you everything that I can.
        Not only material things, not only gifts that can be held by hand,
        but the things that truly matter.
        My loyalty.
        My effort.
        My patience.
        My sincerity.
        My gentleness.
        My support.
        My time.
        My heart.
        I want to give you a love that does not leave you guessing.
        A love that shows up.
        A love that tries.
        A love that stays.
    </p>

    <p>
        I promise to work for a peaceful life with you.
        A life where you can breathe.
        A life where you do not have to be afraid.
        A life where our home feels calm, safe, and full of understanding.
        I dream of giving you a house that is peaceful and full of love.
        A home where there is warmth in every room.
        A home where laughter can be heard freely.
        A home where we can be each other’s comfort after long and tiring days.
        A home where love is not only spoken, but lived.
    </p>

    <p>
        I want that home to be the kind of place where your heart can always rest.
        A home where we choose kindness.
        A home where we learn to understand one another.
        A home where we pray together, heal together, grow together, and continue choosing each other.
        A home where love is gentle and peaceful.
        A home where no matter how heavy the outside world becomes,
        we still have each other and a place that feels safe.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        I also promise to take care of you.
        Not just when things are easy, but especially when life becomes difficult.
        I want to be there for you when you are tired, when you are overwhelmed,
        when you feel weak, and when you simply need someone to lean on.
        I want to become the kind of partner who protects your peace,
        supports your dreams, and makes your burdens feel lighter.
        I want to love you in a way that feels steady, dependable, and true.
    </p>

    <p>
        And when the time comes, I promise to take care of our future children too.
        I promise to love them with the same sincerity, gentleness, and devotion.
        I promise to do my best to become a good father.
        I want us to raise them in a home filled with love, patience, respect, faith, and warmth.
        I want them to grow up seeing parents who choose each other,
        respect each other, forgive each other, and continue loving each other through every season.
    </p>

    <div class="dream-quote">
        “I dream of a future where our children grow in a home built by love, peace, faith, and the quiet strength of two people who never stopped choosing each other.”
    </div>

    <p>
        I promise to take you to the places you have dreamed of.
        I want to go there with you, hand in hand,
        not just as travelers, but as two people building memories in every place our hearts have longed for.
        I want to see the places you have wished to see.
        I want to watch your eyes light up in moments you once only imagined.
        I want to stand beside you in those places and think,
        “I am so grateful I get to do this with you.”
    </p>

    <p>
        And even beyond the places themselves, what I truly want is the journey with you.
        I want the road trips, the flights, the long walks, the tired feet,
        the little food trips, the late-night talks, the spontaneous plans,
        and the simple joy of discovering life with you.
        I want the future where our dreams are not just wishes anymore,
        but memories we get to make together.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        My Baby, I know I am not perfect.
        I know I still have so much to learn, so much to improve,
        and so many ways I can still become better.
        But I promise that I will never stop trying.
        I will keep learning how to love you better.
        I will keep growing into the kind of man worthy of the future I dream of having with you.
        I will keep becoming someone who protects, provides, listens, understands, and stays.
    </p>

    <p>
        I promise that my love will not remain only in words written here.
        I want it to be seen in the way I act.
        In the way I stay loyal.
        In the way I support you.
        In the way I make decisions that honor the life I want to build with you.
        In the way I protect your heart.
        In the way I keep choosing what is good for us.
        In the way I make space for your peace, your dreams, your healing, and your happiness.
    </p>

    <div class="section-promise">
        “I promise to marry you, to cherish you, to build a peaceful home with you, to care for you and our future children, and to walk with you toward every dream we will one day reach together.”
    </div>

    <p>
        I hope that when you read this, you feel how sincere I am.
        This is not just me talking about a faraway future.
        This is me letting you know that when I look ahead, you are there.
        In my prayers, you are there.
        In my dreams, you are there.
        In the home I imagine, you are there.
        In the family I hope for, you are there.
        In the life I want to build, you are there.
    </p>

    <p>
        I do not know every detail of what the future will look like,
        but I know the person I want to face it with.
        I know whose hand I want to hold.
        I know whose heart I want to protect.
        I know whose dreams I want to support.
        I know who I want to come home to after long days.
        And that person is you.
    </p>

    <div class="vow-quote ending-vow">
        <span>Through every season, still you.</span>
        <small>In every road I take, in every future I imagine, my heart still chooses you.</small>
    </div>

    <p class="letter-ending">
        My Baby, this is my promise.
        I will love you.
        I will cherish you.
        I will choose you.
        I will take care of you.
        I will work for a peaceful life with you.
        I will dream with you.
        I will build with you.
        I will keep my heart sincere toward you.
        And when the right time comes, I will gladly call you my wife and spend my life proving that this promise was always real.
    </p>

    <p class="letter-ending">
        So if you ever wonder what kind of future lives in my heart, this is it.
        A future with you.
        A peaceful home with you.
        Children we will love together.
        Dreams we will reach together.
        Places we will see together.
        A life where I never get tired of choosing you.
        A life where love remains gentle, faithful, and true.
        A life where, through every hardship and every blessing, I still end up exactly where I want to be.
        Beside you.
    </p>

</div>
`,
"",
""

),

       new Memory(
"I'm Sorry, My Baby",
"A promise from my heart",
`
<div class="memory-letter apology-letter">

    <p class="letter-opening">
        My Baby, I just want to start by saying that I am truly sorry.
        Sorry for the moments I have hurt you, disappointed you, or made you feel anything less than the love you deserve.
        If there are times when my actions, my words, or even my silence became the reason for your pain,
        please know that it was never my intention to make you feel that way.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        I know I am not perfect.
        I know there are still so many things I need to improve, so many parts of myself I still need to work on,
        and so many ways I can still become a better person and a better partner for you.
        But one thing I want you to always remember is this:
        <span class="soft-highlight">I will never stop trying.</span>
    </p>

    <p>
        I may not be perfect, but I will not stop doing my best.
        I will not stop trying to be better for you.
        I will not stop learning, changing, and growing,
        because you matter so much to me, and what we have matters so much to me.
        Loving you is not something I take lightly.
        That is why whenever I fall short, it hurts me too,
        because the last thing I would ever want is to become the reason for your sadness.
    </p>

    <div class="memory-quote">
        "I may not be perfect, but I will never stop doing my best and trying to be better for you."
    </div>

    <p>
        If I have ever made you question my love, I am sorry.
        If I have ever made you feel alone when I should have been your comfort, I am sorry.
        If there were moments when I was not as gentle, patient, or understanding as I should have been,
        I am truly, sincerely sorry.
    </p>

    <p>
        You deserve a love that feels safe.
        You deserve a love that listens.
        You deserve a love that protects your heart and takes care of it.
        And I know that there are times when I still fall short of that.
        But please know that I am aware of my mistakes,
        and I am not the kind of person who will simply ignore them and stay the same.
        I want to be better.
        I want to grow.
        I want to become the kind of person who loves you more gently,
        more patiently, and more beautifully each day.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        Thank you for loving me even when I am still learning.
        Thank you for staying, for understanding, and for seeing the parts of me that are still unfinished.
        Your love makes me want to become better not out of pressure,
        but because you are someone so precious to me.
        You are someone I never want to lose.
        You are someone I want to keep choosing, keep protecting, and keep loving with all that I have.
    </p>

    <p>
        I want you to know that my apology is not just words.
        I do not want this to be the kind of apology that sounds beautiful for a moment and then gets forgotten.
        I want my apology to be seen in the way I change,
        in the way I try harder,
        in the way I become more mindful of your heart,
        and in the way I continue choosing to love you better every single day.
    </p>

    <div class="apology-promise">
        "I will keep trying. I will keep learning. I will keep growing. And I will keep loving you better."
    </div>

    <p>
        There may still be days when I make mistakes.
        There may still be moments when I fail.
        But please believe me when I say that I will not use my imperfections as an excuse to stay the same.
        I will keep working on myself.
        I will keep trying to understand you more.
        I will keep doing my best to become someone who brings you peace instead of pain,
        comfort instead of confusion,
        and love instead of doubt.
    </p>

    <p>
        Asawa ko, if there is one thing I want you to hold onto, it is this:
        you are worth every effort.
        You are worth every change.
        You are worth every lesson I need to learn.
        And if loving you means becoming a better person, then I will gladly do that,
        over and over again.
    </p>

    <div class="letter-divider">✦</div>

    <p class="letter-ending">
        So from the deepest part of my heart, I am sorry.
        Sorry for the moments I was not enough.
        Sorry for the moments I made things harder for you.
        Sorry for the moments I failed to love you in the way you deserved.
        But please also know this:
        I am here, I am trying, and I am not giving up on becoming better for you.
    </p>

    <p class="letter-ending">
        I love you too much to stay careless.
        I love you too much to stay the same.
        And I love you enough to keep growing, keep improving, and keep proving to you that my love is real.
        I may not be perfect, but I will keep doing my best, every day, to be better for you.
    </p>

</div>
`,
"",
""

),

       new Memory(
"A Reassurance For You",
"My heart will always stay",
`
<div class="memory-letter reassurance-letter">

    <p class="letter-opening">
        My baby, I want you to always remember this with all your heart.
        Hinding hindi po kita iiwan.
        Hindi ako magbabago sa pagmamahal ko sa’yo.
        At kailanman, hindi kita lolokohin.
        I want these words to stay with you, especially on the days when your heart feels unsure,
        when your mind becomes too heavy, or when fear starts whispering things that are not true.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        I know that life is not always easy.
        There will be days that feel light and beautiful, and there will also be days that feel heavy and uncertain.
        There may be moments when doubts try to enter your heart, moments when you overthink,
        moments when you become scared of being left behind, forgotten, or hurt.
        But my love, if there is one thing I want to give you, it is peace.
        I want you to have peace in knowing that I am here, and I am staying.
    </p>

    <p>
        Hindi kita iiwan.
        Not when things are easy, and not when things are hard.
        Not only in the happy moments, but also in the quiet, difficult, and painful ones.
        I want to be the kind of love that remains.
        The kind of love that does not disappear when life becomes inconvenient.
        The kind of love that stays gentle, true, and certain.
    </p>

    <div class="memory-quote">
        “You do not have to be afraid of losing me, because my heart has already chosen to stay with you.”
    </div>

    <p>
        I also want you to know that hindi ako magbabago.
        My feelings for you are not shallow.
        They are not temporary.
        They are not the kind that fades just because things become difficult.
        What I feel for you is real, sincere, and deeply rooted in my heart.
        If anything changes, I want it to be this:
        I want to love you better,
        understand you better,
        and take care of your heart even more.
        But never in a way that would make me drift away from you.
    </p>

    <p>
        My love for you is not something I say just for comfort.
        It is a promise I carry seriously.
        It means I will keep choosing you.
        I will keep protecting what we have.
        I will keep showing up for you.
        I will keep becoming someone worthy of your trust and your love.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        At gusto ko rin ipaalala sa’yo ito.
        Kailangan mo pong malaman na kailanman, hindi kita lolokohin.
        I could never be careless with your heart like that.
        I could never choose something that would destroy the peace, trust, and love that we have built together.
        Your heart is too precious to me.
        Ikaw ay napakahalaga sa akin.
        And because you are so important to me, I will never do something that would intentionally break you.
    </p>

    <p>
        I want to be someone you can rest your heart in.
        Someone you can believe.
        Someone you can trust with your fears, your softness, your vulnerability, and your love.
        I want you to feel safe with me.
        Safe in my words.
        Safe in my loyalty.
        Safe in my intentions.
        Safe in the certainty that I am not here to hurt you, but to love you the best way I can.
    </p>

    <div class="reassurance-promise">
        “I am here. I am staying. I am not changing my love for you. I will not betray your heart.”
    </div>

    <p>
        There may be times when I cannot perfectly express everything I feel,
        and there may be days when I am not the best at putting reassurance into beautiful words right away.
        But even in those moments, I hope you remember that my heart remains the same.
        My intention remains the same.
        My love remains the same.
        And that love continues to say,
        quietly but truthfully,
        that I am not going anywhere.
    </p>

    <p>
        If ever your heart grows tired, let it rest in me.
        If ever your mind becomes too loud, let my love remind you of what is true.
        If ever fear visits you, let this letter be one of the things you return to.
        Return to these words and remember that you have someone who loves you sincerely.
        Someone who is not playing with your feelings.
        Someone who truly wants a future with you.
        Someone who wants to keep you, protect you, and stay.
    </p>

    <div class="letter-divider">✦</div>

    <p class="letter-ending">
        My baby, please keep this in your heart.
        Hinding hindi po kita iiwan.
        Hindi ako magbabago.
        At kailanman, hindi kita lolokohin.
        I will stay beside you with sincerity, with loyalty, and with love.
        I will keep choosing you, and I will keep proving to you that my heart is safe for yours.
    </p>

    <p class="letter-ending">
        No matter how many days pass, no matter how life changes around us,
        I want you to remember that my love is here to remain.
        And as long as I have this heart, it will continue to choose you, stay with you,
        and reassure you that you are deeply loved.
    </p>

</div>
`,
"images/reassurance-photo.jpg",
""

),

        new Memory(
"What This Little Universe Holds",
"Memory, assurance, dedication, and promise",
`
<div class="memory-letter future-letter universe-purpose-letter">

    <p class="letter-opening">
        My Baby, this little universe was made for you with all the sincerity I have in my heart.
        Every star, every word, every memory, and every small detail here was placed with love.
        I made this not just so you could see something beautiful, but so you could feel something real.
        I hope that through this, maramdaman mo po ang taos-puso kong pagmamahal para sa’yo.
    </p>

    <div class="latin-quote">
        <span>Ad astra, per aspera</span>
        <small>To the stars, through hardships</small>
    </div>

    <p>
        I chose that phrase because, in a way, it feels like us.
        <span class="soft-highlight">Ad astra, per aspera.</span>
        To the stars, through hardships.
        It reminds me that beautiful things are not always reached through easy roads.
        Sometimes, love also passes through worries, misunderstandings, distance, tired days, heavy hearts,
        and moments where both people have to choose patience, understanding, and faith.
        But even through all of that, my heart still wants to reach the stars with you.
    </p>

    <p>
        This little universe is my way of telling you that even if the road is not always easy,
        even if there are days when we have to go through hard things,
        even if there are moments when life feels heavy,
        I still want this journey with you.
        I still want to choose you through the beautiful days and the difficult ones.
        I still want to hold your hand through every road that leads us closer to the life we dream of.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        This website holds four things that my heart always wants to give you:
        <span class="soft-highlight">memory, assurance, dedication, and promise.</span>
        These are not just random words to me.
        They are pieces of how I love you.
        They are the parts of my heart that I wanted to turn into something you can see,
        something you can read,
        and something you can return to whenever you need to be reminded that you are deeply loved.
    </p>

    <p>
        I want this little universe to become a place you can visit whenever your heart feels tired.
        A place where you can remember that there is someone who treasures you.
        A place where you can feel safe when your thoughts become too loud.
        A place where you can see how proud I am of you.
        A place where my promises are written clearly, so that even when I am not beside you,
        my love can still reach you through these words.
    </p>

    <div class="memory-quote">
        “This little universe is not just made of stars. It is made of everything my heart wants you to feel.”
    </div>

    <p>
        The <span class="soft-highlight">memory</span> part is for all the moments I will always return to.
        The days we spent together, the places we went to, the little adventures, the quiet moments,
        the laughter, the pagod, the unexpected plans, and even the simple times when nothing grand happened,
        but everything still felt meaningful because I was with you.
    </p>

    <p>
        I want you to know that I remember.
        I remember the feelings.
        I remember the details.
        I remember the way my heart felt lucky just because you were beside me.
        I remember the days that made me smile, the trips that made me feel alive,
        the quiet moments that made me feel at peace,
        and the simple memories that became special only because they were shared with you.
    </p>

    <p>
        The memory part is my way of saying that you are not just someone who passed through my life.
        You became part of the moments I want to keep.
        You became part of the stories I want to look back on.
        You became the reason why ordinary days started to feel worth remembering.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        The <span class="soft-highlight">assurance</span> part is for the peace I always want to give your heart.
        My baby, hinding hindi po kita iiwan.
        Hindi ako magbabago sa pagmamahal ko sa’yo.
        At kailanman, hindi kita lolokohin.
        I want you to feel safe with me.
        Safe in my love, safe in my loyalty, safe in my intentions,
        and safe in the truth that I am here to stay.
    </p>

    <p>
        I know there may be days when fear becomes loud.
        There may be days when your thoughts become heavy,
        when your heart starts asking questions,
        or when your mind tries to convince you of things that are not true.
        But I want this part of the universe to remind you that you do not have to be afraid of losing me.
        I am not here to play with your heart.
        I am not here to make you feel replaceable.
        I am here to love you sincerely, carefully, and truthfully.
    </p>

    <p>
        Assurance, for me, is not only about saying comforting words.
        It is about choosing actions that make you feel safe.
        It is about showing up.
        It is about staying honest.
        It is about protecting your peace.
        It is about making sure that the love I give you does not become another reason for fear,
        but a place where your heart can rest.
    </p>

    <div class="section-promise">
        “You are loved in my memories, protected by my assurance, honored by my dedication, and kept by my promise.”
    </div>

    <p>
        The <span class="soft-highlight">dedication</span> part is for you, for who you are,
        and for everything I see in you.
        My baby, my misis, my wifey, I am so proud of you.
        Not once have I doubted your capabilities.
        Noon pa man, noong Junior Officers pa lang tayo, I already believed in you.
        I already knew that you were strong, capable, hardworking, and meant for something great.
    </p>

    <p>
        Now that you are the President of the Campus Student Government Main Campus,
        I want you to know that my heart is full of pride.
        I know how much effort, courage, and heart it took for you to be where you are.
        I know leadership is not easy.
        I know it comes with pressure, expectations, responsibilities, and days when you have to be strong even when you are tired.
        But still, you continue.
        Still, you serve.
        Still, you care.
        And that is one of the many reasons why I admire you so much.
    </p>

    <p>
        This dedication is my way of honoring you.
        Not only your achievements, but also your heart.
        Not only your title, but also your effort.
        Not only the person people see in public, but also the person I know closely:
        the one who gets tired,
        the one who still tries,
        the one who carries so much,
        and the one who deserves to be reminded that she is doing so well.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        The <span class="soft-highlight">promise</span> part is for everything my heart chooses to keep.
        I promise to keep choosing you.
        I promise to keep trying.
        I promise to keep learning how to love you better.
        I promise to stay loyal, sincere, and gentle with your heart.
        I may not be perfect, and I know there are still things I need to improve,
        but I will never stop doing my best to become better for you and for us.
    </p>

    <p>
        I promise that my love will not only live in words.
        I want it to live in my actions.
        In the way I listen.
        In the way I stay.
        In the way I reassure you.
        In the way I support you.
        In the way I choose honesty even when it is hard.
        In the way I continue to grow because loving you makes me want to become better.
    </p>

    <p>
        I promise to remember that love is not just about the easy days.
        Love is also about patience.
        Love is about understanding.
        Love is about choosing each other even when things feel difficult.
        Love is about reaching the stars together, even if the path is not always smooth.
        Again, <span class="soft-highlight">ad astra, per aspera</span>.
        To the stars, through hardships.
        And if the stars are where our dreams are, then I want to reach them with you.
    </p>

    <div class="future-promise">
        “If one day we look back at all of this, I hope your heart remembers that every part of it was made with love.”
    </div>

    <p>
        I hope that one day, we can look back at all of these memories and smile.
        I hope we can remember the moments we shared, the roads we took, the places we went to,
        the challenges we faced, and the love that stayed through all of it.
        I hope that when that day comes, you will not only remember what happened,
        but also remember how deeply you were loved through every season.
    </p>

    <p>
        Sana kapag binabalikan mo itong website na ito, maramdaman mo na hindi ito basta ginawa lang.
        I hope you feel the effort behind it.
        The care behind it.
        The love behind it.
        The way I tried to place my heart into words so that even when I am not beside you,
        you still have something that reminds you that someone loves you sincerely.
    </p>

    <p>
        This little universe is my way of saying thank you for existing in my life.
        Thank you for being someone I can love this deeply.
        Thank you for being part of my memories.
        Thank you for being someone I want to reassure.
        Thank you for being someone I am proud to dedicate my words, effort, and heart to.
        And thank you for being someone I want to make promises to,
        not just through words,
        but through the way I continue choosing you every day.
    </p>

    <div class="latin-quote ending-latin">
        <span>Ad astra, per aspera</span>
        <small>Through every hardship, still toward our stars.</small>
    </div>

    <p>
        Asawa ko, I hope this website becomes a place you can return to.
        A place where you can remember us.
        A place where your heart can feel reassured.
        A place where you can see how proud I am of you.
        A place where you can read my promises again whenever you need to be reminded.
        This is our little universe, and everything in it leads back to you.
    </p>

    <p class="letter-ending">
        So yes, this little universe contains my memory, my assurance, my dedication, and my promise.
        But more than that, it contains my heart.
        It contains the love I have for you.
        A love that remembers, reassures, admires, supports, promises, and stays.
    </p>

    <p class="letter-ending">
        I hope that every time you open this, you feel loved.
        I hope you feel chosen.
        I hope you feel safe.
        I hope you feel how proud I am of you.
        And most of all, I hope you feel that my love for you is sincere, deep, and true.
    </p>

</div>
`,
"",
""

),

        new Memory(
            "A Song I Dedicate to You",
            "Bawat Daan",
            "This song is one of the most special stars in this little universe, because every time I hear it, I remember you.",
            "",
            ""

)];

    this.memories[9].video = "videos/bawat-daan.mp4";
    this.memories[9].dedication = `I dedicate this whole song to you, “Bawat Daan.”

I still remember the day na una mo itong pinarinig sa akin. I did not know that a song could suddenly become a place, a memory, and a feeling, but from that moment on, every time na naririnig ko itong kantang ito, ikaw agad ang naiisip ko. It became more than just music. It became a quiet reminder of you, of us, and of how every road in my heart somehow leads back to you.

There is a line in the song that says, “Ikaw ang dulo,” and that small line feels like one of the simplest ways to explain what you are to me. You are not just someone I met along the way. You became the direction my heart follows, the answer it keeps finding, and the home it keeps choosing.

Mula noong nakilala kita, parang nagkaroon ng saysay ang bawat lakad, bawat pagod, bawat pangarap, at bawat takot ko. Before you, there were days when I felt like I was only moving forward without knowing where I was really going. But then you came, and suddenly, everything felt softer. Everything felt warmer. Everything felt like it had a destination.

You are my calm after every tiring day. You are the person I want to run to when the world feels heavy. You are the name my heart looks for in silence. Sa bawat saya, sa bawat lungkot, sa bawat pagod, at sa bawat pangarap, ikaw ang naiisip kong uuwian.

This song reminds me that love is not always about perfect roads. Sometimes it is about choosing the same person even when the road is hard, even when the path is uncertain, and even when there are so many questions. And for me, no matter how many doubts, turns, or distances there may be, my heart already knows the answer.

If my heart could be mapped, you would be the beginning, the middle, and the place it always returns to. Not because the road is always easy, but because loving you makes every road worth taking.

Ikaw ang bawat daan ko.Ikaw ang pahinga ko.Ikaw ang pinipili ko.Ikaw ang uuwian ko.`;}
            ""
        ),

        new Memory(
            "The Quiet Moments",
            "The simple days with you",
            `
            <div class="quiet-letter">
                <p class="quiet-opening">
                    There are moments with you where nothing grand has to happen.
                    No big plans, no loud conversations, no need to do anything special.
                    Just being beside you is already enough for me.
                </p>

                <p>
                    In moments like this, kahit tahimik lang tayo, kahit magkatabi lang tayo,
                    my whole body feels like it finally found a place to rest.
                    It is like every tired part of me starts to calm down the moment I am near you.
                    As if my heart, my mind, and my whole being are being gently charged just by your presence.
                </p>

                <p>
                    When I am with you, even the weight I carry feels lighter.
                    The problems do not always disappear completely, but somehow, they stop feeling so heavy.
                    The noise in my head becomes softer. The worries in my chest become easier to breathe through.
                    And for a while, the world feels kinder because I get to share the silence with you.
                </p>

                <div class="quiet-quote">
                    “Kahit wala tayong gawin, basta katabi kita, sapat na.”
                </div>

                <p>
                    I think that is one of the things I love most about us.
                    We do not always have to fill the silence.
                    We do not always have to chase excitement.
                    Sometimes, the quietest moments are the ones that feel the most real,
                    because they remind me that love can also be peaceful.
                </p>

                <p>
                    You are my rest after a long day.
                    You are the calm I look for when everything feels too much.
                    You are the person my heart wants to come home to, not only during the happy moments,
                    but also during the tired, quiet, ordinary ones.
                </p>

                <p>
                    And even in those quiet moments, I want you to know that I would still choose you.
                    I would choose sitting beside you without saying anything.
                    I would choose the silence, the stillness, the comfort, and the peace of simply being near you.
                </p>

                <p class="quiet-ending">
                    Because with you, even doing nothing feels like everything.
                    With you, the quiet feels warm.
                    With you, my heart feels at home.
                </p>
            </div>
            `,
            "images/quiet-moments.jpg",
            ""
        ),

        new Memory(
"So Proud of You",
"My baby, my misis, my wifey",
`
<div class="memory-letter proud-letter">

    <p class="letter-opening">
        My baby, my misis, my wifey, I want you to always know how deeply proud I am of you.
        Not once have I ever doubted your capabilities.
        Not once did I ever question how strong, how capable, and how amazing you are.
        Even before everything you have achieved now, I already knew what kind of person you were.
        I already knew you were someone special.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        Mula noon, noong Junior Officers pa lang tayo, I already believed in you.
        Noon pa man, alam ko na na magaling ka.
        I saw your dedication, your heart, your sincerity, and the way you carry responsibilities with so much effort and care.
        I saw the way you worked hard, the way you gave your time, your energy, and your heart to the things you believed in.
        Even then, I already knew that you were someone who could go so far.
    </p>

    <p>
        That is why seeing you now as the <span class="soft-highlight">President of the Campus Student Government Main Campus</span>
        makes my heart so full.
        It feels so beautiful to witness the person I love grow into the position that she truly deserves.
        And more than the title itself, I am proud because I know how much strength, effort, patience, and courage it took for you to get there.
    </p>

    <div class="memory-quote">
        “I believed in you then, I believe in you now, and I will keep believing in you in every season of your life.”
    </div>

    <p>
        I hope you always remember this, my baby:
        <span class="soft-highlight">you have me</span>.
        You have me in your victories.
        You have me in your fears.
        You have me in your doubts.
        You have me in the days when everything feels heavy.
        And you have me in the days when you are too tired to keep going.
        Nandito lang ako.
        I am here for you.
        I am here beside you.
        I am here to remind you how amazing you are whenever you forget.
    </p>

    <p>
        Palagi kitang susuportahan at sasamahan.
        I will always be the one cheering for you, praying for you, believing in you, and standing by your side.
        I want to be your comfort when things get hard, your peace when things become overwhelming,
        and your safe place whenever the pressure of everything around you starts to feel too much.
    </p>

    <div class="letter-divider">✦</div>

    <p>
        And now, with your plans to run for a second time, I want you to remember something very clearly.
        <span class="soft-highlight">Hindi kita iiwan.</span>
        I am here.
        I will stay.
        I will continue to support you.
        I will gladly give my all to you.
        If this is the path you want to take, then know that you will never have to face it alone.
    </p>

    <p>
        I know that this journey is not easy.
        I know there will be pressure, expectations, stress, and moments of exhaustion.
        There will be days when you might feel overwhelmed, and nights when you might question yourself.
        But if those moments come, I hope you pause and remember who you are.
        Remember how capable you are.
        Remember how much good you are capable of doing.
        Remember that you are not in this position by accident.
        You earned it.
        You deserve it.
    </p>

    <div class="yes-moment proud-moment">
        “No matter how far you go, how high you rise, or how hard the road becomes, I will be here loving you, believing in you, and walking beside you.”
    </div>

    <p>
        I want you to know that I am proud not only of your achievements, but of your heart.
        I am proud of the way you care.
        I am proud of the way you stay committed.
        I am proud of the way you keep trying even when things are difficult.
        I am proud of your strength, your mind, your leadership, and the goodness you carry within you.
    </p>

    <p>
        You inspire me in so many ways.
        And sometimes I wish you could see yourself the way I see you.
        Because if you did, maybe you would understand why my heart is so full of admiration for you.
        You are more than capable.
        You are more than enough.
        You are someone worth believing in, worth supporting, and worth standing beside through everything.
    </p>

    <div class="letter-divider">✦</div>

    <p class="letter-ending">
        So my baby, my misis, my wifey, please always remember this:
        no matter what happens, no matter what decision you make, no matter what challenges come your way,
        <span class="soft-highlight">you have me, your AE</span>.
        I am here.
        I am proud of you.
        I believe in you.
        And I will keep choosing to support you with all that I have.
    </p>

    <p class="letter-ending">
        I will gladly give my all to you.
        I will gladly stand by your side.
        I will gladly keep reminding you that you are strong, capable, and deserving of every dream you are brave enough to chase.
        And if you choose to fight for this path again, then I will be right here, loving you, supporting you, and never letting you feel alone.
    </p>

</div>
`,
[
    "images/proud-of-you-1.jpg",
    "images/proud-of-you-2.jpg",
    "images/proud-of-you-3.jpg"
],
""

)];

    this.memories[9].video = "videos/bawat-daan.mp4";
    this.memories[9].dedication = `I dedicate this whole song to you, “Bawat Daan.”

I still remember the day na una mo itong pinarinig sa akin. I did not know that a song could suddenly become a place, a memory, and a feeling, but from that moment on, every time na naririnig ko itong kantang ito, ikaw agad ang naiisip ko. It became more than just music. It became a quiet reminder of you, of us, and of how every road in my heart somehow leads back to you.

There is a line in the song that says, “Ikaw ang dulo,” and that small line feels like one of the simplest ways to explain what you are to me. You are not just someone I met along the way. You became the direction my heart follows, the answer it keeps finding, and the home it keeps choosing.

Mula noong nakilala kita, parang nagkaroon ng saysay ang bawat lakad, bawat pagod, bawat pangarap, at bawat takot ko. Before you, there were days when I felt like I was only moving forward without knowing where I was really going. But then you came, and suddenly, everything felt softer. Everything felt warmer. Everything felt like it had a destination.

You are my calm after every tiring day. You are the person I want to run to when the world feels heavy. You are the name my heart looks for in silence. Sa bawat saya, sa bawat lungkot, sa bawat pagod, at sa bawat pangarap, ikaw ang naiisip kong uuwian.

This song reminds me that love is not always about perfect roads. Sometimes it is about choosing the same person even when the road is hard, even when the path is uncertain, and even when there are so many questions. And for me, no matter how many doubts, turns, or distances there may be, my heart already knows the answer.

If my heart could be mapped, you would be the beginning, the middle, and the place it always returns to. Not because the road is always easy, but because loving you makes every road worth taking.

Ikaw ang bawat daan ko.Ikaw ang pahinga ko.Ikaw ang pinipili ko.Ikaw ang uuwian ko.`;}

createBackgroundStars() {
    for (let i = 0; i < 170; i++) {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const size = `${(Math.random() * 2.5 + 0.5).toFixed(2)}px`;
        const delay = `${(Math.random() * 4).toFixed(2)}s`;
        const duration = `${(3 + Math.random() * 5).toFixed(2)}s`;
        const opacity = `${(0.25 + Math.random() * 0.75).toFixed(2)}`;

        const star = new BackgroundStar(
            this.backgroundStarsContainer,
            left,
            top,
            size,
            delay,
            duration,
            opacity
        );

        star.create();
    }
}

createSparkles() {
    for (let i = 0; i < 28; i++) {
        const left = `${8 + Math.random() * 84}%`;
        const top = `${10 + Math.random() * 75}%`;
        const size = `${(Math.random() * 3 + 1.5).toFixed(2)}px`;
        const delay = `${(Math.random() * 6).toFixed(2)}s`;
        const duration = `${(4 + Math.random() * 6).toFixed(2)}s`;
        const opacity = `${(0.25 + Math.random() * 0.45).toFixed(2)}`;

        const sparkle = new Sparkle(
            this.sparklesContainer,
            left,
            top,
            size,
            delay,
            duration,
            opacity
        );

        sparkle.create();
    }
}

createShootingStars() {
    const shootingStars = [
        new ShootingStar(this.shootingStarsContainer, "10%", "95%", "0s", "6s", "190px"),
        new ShootingStar(this.shootingStarsContainer, "18%", "88%", "2.8s", "6.5s", "170px"),
        new ShootingStar(this.shootingStarsContainer, "28%", "98%", "6.8s", "5.8s", "220px"),
        new ShootingStar(this.shootingStarsContainer, "42%", "90%", "10s", "6.8s", "180px"),
        new ShootingStar(this.shootingStarsContainer, "14%", "74%", "13.5s", "6s", "155px"),
        new ShootingStar(this.shootingStarsContainer, "55%", "100%", "17.5s", "7s", "235px")
    ];

    shootingStars.forEach(star => star.create());
}

addEventListeners() {
    this.enterBtn.addEventListener("click", () => {
        this.enterUniverse();
    });

    this.closePopupBtn.addEventListener("click", () => {
        this.closePopup();
    });

    this.popup.addEventListener("click", (event) => {
        if (event.target === this.popup) {
            this.closePopup();
        }
    });

    this.moon.addEventListener("click", () => {
        this.openSecretLetter();
    });

    const memoryStars = document.querySelectorAll(".memory-star");

    memoryStars.forEach(star => {
        star.addEventListener("click", () => {
            const index = Number(star.dataset.index);
            this.openMemory(index);
        });
    });
}

enterUniverse() {
    this.playMusic();

    this.introScreen.classList.add("fade-out");

    setTimeout(() => {
        this.introScreen.classList.add("hidden");
        this.universeScreen.classList.remove("hidden");
    }, 1000);
}

playMusic() {
    if (this.backgroundMusic) {
        this.backgroundMusic.volume = 0.70;
        this.backgroundMusic.play().catch(() => {
            console.log("Music can only play after user interaction.");
        });
    }
}

openMemory(index) {
const memory = this.memories[index];

if (!memory) return;

this.memoryTitle.textContent = memory.title;
this.memoryDate.textContent = memory.date;
this.memoryMessage.innerHTML = memory.message;

if (memory.hasPhoto()) {
    if (memory.photos.length === 1) {
        this.photoBox.innerHTML = `
            <img src="${memory.photos[0]}" alt="Memory Photo">
        `;
    } else {
        this.photoBox.innerHTML = `
            <div class="photo-gallery">
                ${memory.photos.map((photo, i) => `
                    <img src="${photo}" alt="Memory Photo ${i + 1}">
                `).join("")}
            </div>
        `;
    }
} else {
    this.photoBox.innerHTML = "";
}

if (memory.video) {
    this.videoBox.classList.remove("hidden");
    this.memoryVideoSource.src = memory.video;
    this.memoryVideo.load();
} else {
    this.videoBox.classList.add("hidden");
    this.memoryVideo.pause();
    this.memoryVideoSource.src = "";
    this.memoryVideo.load();
}

if (memory.dedication) {
    this.dedicationBox.classList.remove("hidden");
    this.dedicationText.textContent = memory.dedication;
} else {
    this.dedicationBox.classList.add("hidden");
    this.dedicationText.textContent = "";
}

this.popup.classList.remove("hidden");

}

openSecretLetter() {
    if (this.monthsaryInterval) {
        clearInterval(this.monthsaryInterval);
        this.monthsaryInterval = null;
    }

    this.memoryTitle.textContent = "You Found the Moon";
    this.memoryDate.textContent = "The brightest part of my universe";

    this.memoryMessage.innerHTML = `
        <div class="memory-letter moon-letter">

            <p class="letter-opening">
                Asawa ko, if this little universe had one gentle light that made everything feel softer,
                calmer, and more beautiful, it would be you.
                You are the kind of presence that does not only shine, but also comforts.
                You do not just make things brighter.
                You make them feel warmer, safer, and more alive.
                And if I am being honest, one of the most beautiful things that ever happened to me
                was finding someone like you in this life.
            </p>

            <div class="moon-quote">
                “In a sky full of wonders, the gentlest light I found was you.”
            </div>

            <p>
                Before you, life was still moving, days were still passing,
                and the world kept turning the way it always had.
                But when you came into my life, something changed in a way I cannot fully explain.
                It felt as if everything became softer.
                The ordinary days started to feel more meaningful.
                The simple moments started to feel worth remembering.
                And the future, which once felt so distant, slowly became something beautiful to look forward to,
                because somehow, when I imagined it, you were always there.
            </p>

            <p>
                I think that is one of the things I love most about you.
                You do not only bring joy into my life.
                You bring peace.
                You feel like the kind of love that gives comfort without even trying too hard.
                The kind of love that becomes home.
                The kind of love that quietly settles in the heart and stays there.
                You are one of the few people who can make my heart feel both full and at rest at the same time.
            </p>

            <p>
                If this little universe exists, it exists because I wanted a place where my love for you could live in words,
                in memories, in promises, and in all the little feelings I do not ever want you to forget.
                And in this universe, if the stars are the memories, then you are the moon.
                You are the gentle light above all of them.
                The one that makes everything feel complete.
                The one that makes the night beautiful.
                The one that gives calm even in silence.
            </p>

            <div class="letter-divider">✦</div>

            <p>
                I also wanted this part to hold something living, something that keeps moving with time,
                just like us.
                Because love is not only about what we remember.
                It is also about what we continue to look forward to.
                It is about knowing that every passing day brings us a little closer to another 26th,
                another little milestone that reminds me how grateful I am to have you.
            </p>

            <p>
                So below this letter is a small countdown for us.
                A little reminder that time keeps moving, and with it, our story keeps growing too.
                And every time the 26th comes, I want it to say what my heart would gladly tell you over and over again:
                that I am happy we made it to another month together,
                and that loving you is still one of the most beautiful parts of my life.
            </p>

            <div class="monthsary-widget">
                <div class="monthsary-heading">Our little countdown</div>
                <div id="monthsaryDate" class="monthsary-date"></div>
                <div id="monthsaryCountdown" class="monthsary-countdown"></div>
                <p id="monthsarySentence" class="monthsary-sentence"></p>
                <div id="monthsaryMessage" class="monthsary-message"></div>
            </div>

            <p class="letter-ending">
                My Baby, if this universe had a heart, it would beat your name softly in every corner of it.
                And if it had a light that never fails to comfort me, it would still be you.
                Thank you for being the kind of love that feels gentle, steady, and true.
                Thank you for being the moon in my little universe.
            </p>

            <p class="letter-ending">
                And no matter how many stars fill this sky, no matter how many memories we continue to make,
                I hope you always remember this:
                among all the beautiful things in my life, you will always be one of the brightest,
                softest, and most precious parts of it.
            </p>

        </div>
    `;

    this.photoBox.innerHTML = "";
    this.videoBox.classList.add("hidden");
    this.memoryVideo.pause();
    this.memoryVideoSource.src = "";
    this.memoryVideo.load();

    this.dedicationBox.classList.add("hidden");
    this.dedicationText.textContent = "";

    this.popup.classList.remove("hidden");

    setTimeout(() => {
        if (document.getElementById("monthsaryCountdown")) {
            this.startMonthsaryCountdown();
        }
    }, 0);
}

closePopup() {
    if (this.monthsaryInterval) {
        clearInterval(this.monthsaryInterval);
        this.monthsaryInterval = null;
    }

    this.popup.classList.add("hidden");

    if (this.memoryVideo) {
        this.memoryVideo.pause();
        this.memoryVideoSource.src = "";
        this.memoryVideo.load();
    }
}

startMonthsaryCountdown() {
    const countdownEl = document.getElementById("monthsaryCountdown");
    const dateEl = document.getElementById("monthsaryDate");
    const sentenceEl = document.getElementById("monthsarySentence");
    const messageEl = document.getElementById("monthsaryMessage");

    if (!countdownEl || !dateEl || !sentenceEl || !messageEl) return;

    const updateCountdown = () => {
        const now = new Date();

        if (now.getDate() === 26) {
            const monthsCount = this.getMonthsaryCount(now, true);

            dateEl.textContent = `Today is ${this.formatFullDate(now)} ♡`;
            countdownEl.innerHTML = `
                <div class="countdown-celebrate">Today is our monthsary ♡</div>
            `;
            sentenceEl.textContent = "";
            messageEl.textContent = `Happy ${this.getOrdinal(monthsCount)} monthsary to us my babyy ♡`;
            return;
        }

        let nextMonthsary = new Date(now.getFullYear(), now.getMonth(), 26, 0, 0, 0, 0);

        if (now.getDate() > 26) {
            nextMonthsary = new Date(now.getFullYear(), now.getMonth() + 1, 26, 0, 0, 0, 0);
        }

        const diff = nextMonthsary - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const nextMonthsCount = this.getMonthsaryCount(nextMonthsary, true);

        dateEl.textContent = `Next monthsary: ${this.formatFullDate(nextMonthsary)}`;
        countdownEl.innerHTML = `
            <div class="countdown-box">
                <span>${days}</span>
                <small>days</small>
            </div>
            <div class="countdown-box">
                <span>${hours}</span>
                <small>hours</small>
            </div>
            <div class="countdown-box">
                <span>${minutes}</span>
                <small>minutes</small>
            </div>
            <div class="countdown-box">
                <span>${seconds}</span>
                <small>seconds</small>
            </div>
        `;

        sentenceEl.textContent = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds left before our monthsary.`;
        messageEl.textContent = `Counting down to our ${this.getOrdinal(nextMonthsCount)} monthsary ♡`;
    };

    updateCountdown();
    this.monthsaryInterval = setInterval(updateCountdown, 1000);
}

getMonthsaryCount(date, exactDate = false) {
    const startYear = 2024;
    const startMonth = 2;
    let months = (date.getFullYear() - startYear) * 12 + (date.getMonth() - startMonth);

    if (!exactDate && date.getDate() < 26) {
        months -= 1;
    }

    return months;
}

getOrdinal(num) {
    const j = num % 10;
    const k = num % 100;

    if (j === 1 && k !== 11) return `${num}st`;
    if (j === 2 && k !== 12) return `${num}nd`;
    if (j === 3 && k !== 13) return `${num}rd`;
    return `${num}th`;
}

formatFullDate(date) {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

}
