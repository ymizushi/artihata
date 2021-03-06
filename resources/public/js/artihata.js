var artihata;

(function (artihata) {
  artihata.EMOJI_TEMPLATE = [
    "bowtie" ,"smile" ,"laughing" ,"blush" ,"smiley"
    ,"relaxed" ,"smirk" ,"heart_eyes" ,"kissing_heart" ,"kissing_closed_eyes"
    ,"flushed" ,"relieved" ,"satisfied" ,"grin" ,"wink"
    ,"stuck_out_tongue_winking_eye" ,"stuck_out_tongue_closed_eyes" ,"grinning" ,"kissing" ,"kissing_smiling_eyes"
    ,"stuck_out_tongue" ,"sleeping" ,"worried" ,"frowning" ,"anguished"
    ,"open_mouth" ,"grimacing" ,"confused" ,"hushed" ,"expressionless"
    ,"unamused" ,"sweat_smile" ,"sweat" ,"disappointed_relieved" ,"weary"
    ,"pensive" ,"disappointed" ,"confounded" ,"fearful" ,"cold_sweat"
    ,"persevere" ,"cry" ,"sob" ,"joy" ,"astonished"
    ,"scream" ,"neckbeard" ,"tired_face" ,"angry" ,"rage"
    ,"triumph" ,"sleepy" ,"yum" ,"mask" ,"sunglasses"
    ,"dizzy_face" ,"imp" ,"smiling_imp" ,"neutral_face" ,"no_mouth"
    ,"innocent" ,"alien" ,"yellow_heart" ,"blue_heart" ,"purple_heart"
    ,"heart" ,"green_heart" ,"broken_heart" ,"heartbeat" ,"heartpulse"
    ,"two_hearts" ,"revolving_hearts" ,"cupid" ,"sparkling_heart" ,"sparkles"
    ,"star" ,"star2" ,"dizzy" ,"boom" ,"collision"
    ,"anger" ,"exclamation" ,"question" ,"grey_exclamation" ,"grey_question"
    ,"zzz" ,"dash" ,"sweat_drops" ,"notes" ,"musical_note"
    ,"fire" ,"hankey" ,"poop" ,"shit" ,"+1"
    ,"thumbsup" ,"-1" ,"thumbsdown" ,"ok_hand" ,"punch"
    ,"facepunch" ,"fist" ,"v" ,"wave" ,"hand"
    ,"raised_hand" ,"open_hands" ,"point_up" ,"point_down" ,"point_left"
    ,"point_right" ,"raised_hands" ,"pray" ,"point_up_2" ,"clap"
    ,"muscle" ,"metal" ,"fu" ,"walking" ,"runner"
    ,"running" ,"couple" ,"family" ,"two_men_holding_hands" ,"two_women_holding_hands"
    ,"dancer" ,"dancers" ,"ok_woman" ,"no_good" ,"information_desk_person"
    ,"raising_hand" ,"bride_with_veil" ,"person_with_pouting_face" ,"person_frowning" ,"bow"
    ,"couplekiss" ,"couple_with_heart" ,"massage" ,"haircut" ,"nail_care"
    ,"boy" ,"girl" ,"woman" ,"man" ,"baby"
    ,"older_woman" ,"older_man" ,"person_with_blond_hair" ,"man_with_gua_pi_mao" ,"man_with_turban"
    ,"construction_worker" ,"cop" ,"angel" ,"princess" ,"smiley_cat"
    ,"smile_cat" ,"heart_eyes_cat" ,"kissing_cat" ,"smirk_cat" ,"scream_cat"
    ,"crying_cat_face" ,"joy_cat" ,"pouting_cat" ,"japanese_ogre" ,"japanese_goblin"
    ,"see_no_evil" ,"hear_no_evil" ,"speak_no_evil" ,"guardsman" ,"skull"
    ,"feet" ,"lips" ,"kiss" ,"droplet" ,"ear"
    ,"eyes" ,"nose" ,"tongue" ,"love_letter" ,"bust_in_silhouette"
    ,"busts_in_silhouette" ,"speech_balloon" ,"thought_balloon" ,"feelsgood" ,"finnadie"
    ,"goberserk" ,"godmode" ,"hurtrealbad" ,"rage1" ,"rage2"
    ,"rage3" ,"rage4" ,"suspect" ,"trollface" ,"sunny"
    ,"umbrella" ,"cloud" ,"snowflake" ,"snowman" ,"zap"
    ,"cyclone" ,"foggy" ,"ocean" ,"cat" ,"dog"
    ,"mouse" ,"hamster" ,"rabbit" ,"wolf" ,"frog"
    ,"tiger" ,"koala" ,"bear" ,"pig" ,"pig_nose"
    ,"cow" ,"boar" ,"monkey_face" ,"monkey" ,"horse"
    ,"racehorse" ,"camel" ,"sheep" ,"elephant" ,"panda_face"
    ,"snake" ,"bird" ,"baby_chick" ,"hatched_chick" ,"hatching_chick"
    ,"chicken" ,"penguin" ,"turtle" ,"bug" ,"honeybee"
    ,"ant" ,"beetle" ,"snail" ,"octopus" ,"tropical_fish"
    ,"fish" ,"whale" ,"whale2" ,"dolphin" ,"cow2"
    ,"ram" ,"rat" ,"water_buffalo" ,"tiger2" ,"rabbit2"
    ,"dragon" ,"goat" ,"rooster" ,"dog2" ,"pig2"
    ,"mouse2" ,"ox" ,"dragon_face" ,"blowfish" ,"crocodile"
    ,"dromedary_camel" ,"leopard" ,"cat2" ,"poodle" ,"paw_prints"
    ,"bouquet" ,"cherry_blossom" ,"tulip" ,"four_leaf_clover" ,"rose"
    ,"sunflower" ,"hibiscus" ,"maple_leaf" ,"leaves" ,"fallen_leaf"
    ,"herb" ,"mushroom" ,"cactus" ,"palm_tree" ,"evergreen_tree"
    ,"deciduous_tree" ,"chestnut" ,"seedling" ,"blossom" ,"ear_of_rice"
    ,"shell" ,"globe_with_meridians" ,"sun_with_face" ,"full_moon_with_face" ,"new_moon_with_face"
    ,"new_moon" ,"waxing_crescent_moon" ,"first_quarter_moon" ,"waxing_gibbous_moon" ,"full_moon"
    ,"waning_gibbous_moon" ,"last_quarter_moon" ,"waning_crescent_moon" ,"last_quarter_moon_with_face" ,"first_quarter_moon_with_face"
    ,"moon" ,"earth_africa" ,"earth_americas" ,"earth_asia" ,"volcano"
    ,"milky_way" ,"partly_sunny" ,"octocat" ,"squirrel" ,"bamboo"
    ,"gift_heart" ,"dolls" ,"school_satchel" ,"mortar_board" ,"flags"
    ,"fireworks" ,"sparkler" ,"wind_chime" ,"rice_scene" ,"jack_o_lantern"
    ,"ghost" ,"santa" ,"christmas_tree" ,"gift" ,"bell"
    ,"no_bell" ,"tanabata_tree" ,"tada" ,"confetti_ball" ,"balloon"
    ,"crystal_ball" ,"cd" ,"dvd" ,"floppy_disk" ,"camera"
    ,"video_camera" ,"movie_camera" ,"computer" ,"tv" ,"iphone"
    ,"phone" ,"telephone" ,"telephone_receiver" ,"pager" ,"fax"
    ,"minidisc" ,"vhs" ,"sound" ,"speaker" ,"mute"
    ,"loudspeaker" ,"mega" ,"hourglass" ,"hourglass_flowing_sand" ,"alarm_clock"
    ,"watch" ,"radio" ,"satellite" ,"loop" ,"mag"
    ,"mag_right" ,"unlock" ,"lock" ,"lock_with_ink_pen" ,"closed_lock_with_key"
    ,"key" ,"bulb" ,"flashlight" ,"high_brightness" ,"low_brightness"
    ,"electric_plug" ,"battery" ,"calling" ,"email" ,"mailbox"
    ,"postbox" ,"bath" ,"bathtub" ,"shower" ,"toilet"
    ,"wrench" ,"nut_and_bolt" ,"hammer" ,"seat" ,"moneybag"
    ,"yen" ,"dollar" ,"pound" ,"euro" ,"credit_card"
    ,"money_with_wings" ,"e-mail" ,"inbox_tray" ,"outbox_tray" ,"envelope"
    ,"incoming_envelope" ,"postal_horn" ,"mailbox_closed" ,"mailbox_with_mail" ,"mailbox_with_no_mail"
    ,"door" ,"smoking" ,"bomb" ,"gun" ,"hocho"
    ,"pill" ,"syringe" ,"page_facing_up" ,"page_with_curl" ,"bookmark_tabs"
    ,"bar_chart" ,"chart_with_upwards_trend" ,"chart_with_downwards_trend" ,"scroll" ,"clipboard"
    ,"calendar" ,"date" ,"card_index" ,"file_folder" ,"open_file_folder"
    ,"scissors" ,"pushpin" ,"paperclip" ,"black_nib" ,"pencil2"
    ,"straight_ruler" ,"triangular_ruler" ,"closed_book" ,"green_book" ,"blue_book"
    ,"orange_book" ,"notebook" ,"notebook_with_decorative_cover" ,"ledger" ,"books"
    ,"bookmark" ,"name_badge" ,"microscope" ,"telescope" ,"newspaper"
    ,"football" ,"basketball" ,"soccer" ,"baseball" ,"tennis"
    ,"8ball" ,"rugby_football" ,"bowling" ,"golf" ,"mountain_bicyclist"
    ,"bicyclist" ,"horse_racing" ,"snowboarder" ,"swimmer" ,"surfer"
    ,"ski" ,"spades" ,"hearts" ,"clubs" ,"diamonds"
    ,"gem" ,"ring" ,"trophy" ,"musical_score" ,"musical_keyboard"
    ,"violin" ,"space_invader" ,"video_game" ,"black_joker" ,"flower_playing_cards"
    ,"game_die" ,"dart" ,"mahjong" ,"clapper" ,"memo"
    ,"pencil" ,"book" ,"art" ,"microphone" ,"headphones"
    ,"trumpet" ,"saxophone" ,"guitar" ,"shoe" ,"sandal"
    ,"high_heel" ,"lipstick" ,"boot" ,"shirt" ,"tshirt"
    ,"necktie" ,"womans_clothes" ,"dress" ,"running_shirt_with_sash" ,"jeans"
    ,"kimono" ,"bikini" ,"ribbon" ,"tophat" ,"crown"
    ,"womans_hat" ,"mans_shoe" ,"closed_umbrella" ,"briefcase" ,"handbag"
    ,"pouch" ,"purse" ,"eyeglasses" ,"fishing_pole_and_fish" ,"coffee"
    ,"tea" ,"sake" ,"baby_bottle" ,"beer" ,"beers"
    ,"cocktail" ,"tropical_drink" ,"wine_glass" ,"fork_and_knife" ,"pizza"
    ,"hamburger" ,"fries" ,"poultry_leg" ,"meat_on_bone" ,"spaghetti"
    ,"curry" ,"fried_shrimp" ,"bento" ,"sushi" ,"fish_cake"
    ,"rice_ball" ,"rice_cracker" ,"rice" ,"ramen" ,"stew"
    ,"oden" ,"dango" ,"egg" ,"bread" ,"doughnut"
    ,"custard" ,"icecream" ,"ice_cream" ,"shaved_ice" ,"birthday"
    ,"cake" ,"cookie" ,"chocolate_bar" ,"candy" ,"lollipop"
    ,"honey_pot" ,"apple" ,"green_apple" ,"tangerine" ,"lemon"
    ,"cherries" ,"grapes" ,"watermelon" ,"strawberry" ,"peach"
    ,"melon" ,"banana" ,"pear" ,"pineapple" ,"sweet_potato"
    ,"eggplant" ,"tomato" ,"corn" ,"house" ,"house_with_garden"
    ,"school" ,"office" ,"post_office" ,"hospital" ,"bank"
    ,"convenience_store" ,"love_hotel" ,"hotel" ,"wedding" ,"church"
    ,"department_store" ,"european_post_office" ,"city_sunrise" ,"city_sunset" ,"japanese_castle"
    ,"european_castle" ,"tent" ,"factory" ,"tokyo_tower" ,"japan"
    ,"mount_fuji" ,"sunrise_over_mountains" ,"sunrise" ,"stars" ,"statue_of_liberty"
    ,"bridge_at_night" ,"carousel_horse" ,"rainbow" ,"ferris_wheel" ,"fountain"
    ,"roller_coaster" ,"ship" ,"speedboat" ,"boat" ,"sailboat"
    ,"rowboat" ,"anchor" ,"rocket" ,"airplane" ,"helicopter"
    ,"steam_locomotive" ,"tram" ,"mountain_railway" ,"bike" ,"aerial_tramway"
    ,"suspension_railway" ,"mountain_cableway" ,"tractor" ,"blue_car" ,"oncoming_automobile"
    ,"car" ,"red_car" ,"taxi" ,"oncoming_taxi" ,"articulated_lorry"
    ,"bus" ,"oncoming_bus" ,"rotating_light" ,"police_car" ,"oncoming_police_car"
    ,"fire_engine" ,"ambulance" ,"minibus" ,"truck" ,"train"
    ,"station" ,"train2" ,"bullettrain_front" ,"bullettrain_side" ,"light_rail"
    ,"monorail" ,"railway_car" ,"trolleybus" ,"ticket" ,"fuelpump"
    ,"vertical_traffic_light" ,"traffic_light" ,"warning" ,"construction" ,"beginner"
    ,"atm" ,"slot_machine" ,"busstop" ,"barber" ,"hotsprings"
    ,"checkered_flag" ,"crossed_flags" ,"izakaya_lantern" ,"moyai" ,"circus_tent"
    ,"performing_arts" ,"round_pushpin" ,"triangular_flag_on_post" ,"jp" ,"kr"
    ,"cn" ,"us" ,"fr" ,"es" ,"it"
    ,"ru" ,"gb" ,"uk" ,"de" ,"one"
    ,"two" ,"three" ,"four" ,"five" ,"six"
    ,"seven" ,"eight" ,"nine" ,"keycap_ten" ,"1234"
    ,"zero" ,"hash" ,"symbols" ,"arrow_backward" ,"arrow_down"
    ,"arrow_forward" ,"arrow_left" ,"capital_abcd" ,"abcd" ,"abc"
    ,"arrow_lower_left" ,"arrow_lower_right" ,"arrow_right" ,"arrow_up" ,"arrow_upper_left"
    ,"arrow_upper_right" ,"arrow_double_down" ,"arrow_double_up" ,"arrow_down_small" ,"arrow_heading_down"
    ,"arrow_heading_up" ,"leftwards_arrow_with_hook" ,"arrow_right_hook" ,"left_right_arrow" ,"arrow_up_down"
    ,"arrow_up_small" ,"arrows_clockwise" ,"arrows_counterclockwise" ,"rewind" ,"fast_forward"
    ,"information_source" ,"ok" ,"twisted_rightwards_arrows" ,"repeat" ,"repeat_one"
    ,"new" ,"top" ,"up" ,"cool" ,"free"
    ,"ng" ,"cinema" ,"koko" ,"signal_strength" ,"u5272"
    ,"u5408" ,"u55b6" ,"u6307" ,"u6708" ,"u6709"
    ,"u6e80" ,"u7121" ,"u7533" ,"u7a7a" ,"u7981"
    ,"sa" ,"restroom" ,"mens" ,"womens" ,"baby_symbol"
    ,"no_smoking" ,"parking" ,"wheelchair" ,"metro" ,"baggage_claim"
    ,"accept" ,"wc" ,"potable_water" ,"put_litter_in_its_place" ,"secret"
    ,"congratulations" ,"m" ,"passport_control" ,"left_luggage" ,"customs"
    ,"ideograph_advantage" ,"cl" ,"sos" ,"id" ,"no_entry_sign"
    ,"underage" ,"no_mobile_phones" ,"do_not_litter" ,"non-potable_water" ,"no_bicycles"
    ,"no_pedestrians" ,"children_crossing" ,"no_entry" ,"eight_spoked_asterisk" ,"eight_pointed_black_star"
    ,"heart_decoration" ,"vs" ,"vibration_mode" ,"mobile_phone_off" ,"chart"
    ,"currency_exchange" ,"aries" ,"taurus" ,"gemini" ,"cancer"
    ,"leo" ,"virgo" ,"libra" ,"scorpius" ,"sagittarius"
    ,"capricorn" ,"aquarius" ,"pisces" ,"ophiuchus" ,"six_pointed_star"
    ,"negative_squared_cross_mark" ,"a" ,"b" ,"ab" ,"o2"
    ,"diamond_shape_with_a_dot_inside" ,"recycle" ,"end" ,"on" ,"soon"
    ,"clock1" ,"clock130" ,"clock10" ,"clock1030" ,"clock11"
    ,"clock1130" ,"clock12" ,"clock1230" ,"clock2" ,"clock230"
    ,"clock3" ,"clock330" ,"clock4" ,"clock430" ,"clock5"
    ,"clock530" ,"clock6" ,"clock630" ,"clock7" ,"clock730"
    ,"clock8" ,"clock830" ,"clock9" ,"clock930" ,"heavy_dollar_sign"
    ,"copyright" ,"registered" ,"tm" ,"x" ,"heavy_exclamation_mark"
    ,"bangbang" ,"interrobang" ,"o" ,"heavy_multiplication_x" ,"heavy_plus_sign"
  ];

  artihata.EMOJI_RGBA_MAP = {
    "+1.png" : [91, 71, 54, 116],
    "-1.png" : [211, 192, 175, 116],
    "1234.png" : [139, 159, 180, 199],
    "8ball.png" : [121, 121, 121, 155],
    "a.png" : [157, 47, 47, 200],
    "ab.png" : [202, 109, 109, 200],
    "abc.png" : [139, 158, 179, 199],
    "abcd.png" : [140, 159, 180, 199],
    "accept.png" : [215, 169, 126, 163],
    "aerial_tramway.png" : [193, 191, 179, 84],
    "airplane.png" : [202, 208, 213, 89],
    "alarm_clock.png" : [162, 109, 107, 167],
    "alien.png" : [62, 70, 70, 144],
    "ambulance.png" : [163, 143, 146, 174],
    "anchor.png" : [195, 203, 213, 72],
    "angel.png" : [186, 183, 178, 144],
    "anger.png" : [228, 181, 181, 67],
    "angry.png" : [145, 108, 25, 154],
    "anguished.png" : [227, 192, 117, 153],
    "ant.png" : [8, 8, 7, 34],
    "apple.png" : [192, 115, 111, 156],
    "aquarius.png" : [163, 110, 187, 200],
    "aries.png" : [163, 107, 188, 200],
    "arrow_backward.png" : [148, 169, 189, 200],
    "arrow_double_down.png" : [148, 166, 185, 199],
    "arrow_double_up.png" : [149, 167, 185, 199],
    "arrow_down.png" : [151, 171, 191, 200],
    "arrow_down_small.png" : [144, 162, 182, 199],
    "arrow_forward.png" : [148, 169, 189, 200],
    "arrow_heading_down.png" : [138, 158, 179, 199],
    "arrow_heading_up.png" : [139, 158, 179, 199],
    "arrow_left.png" : [151, 171, 191, 200],
    "arrow_lower_left.png" : [153, 173, 192, 200],
    "arrow_lower_right.png" : [153, 173, 192, 200],
    "arrow_right.png" : [151, 171, 191, 200],
    "arrow_right_hook.png" : [143, 162, 182, 199],
    "arrow_up.png" : [151, 171, 191, 200],
    "arrow_up_down.png" : [146, 164, 184, 199],
    "arrow_up_small.png" : [145, 164, 183, 199],
    "arrow_upper_left.png" : [152, 172, 191, 200],
    "arrow_upper_right.png" : [152, 172, 191, 200],
    "arrows_counterclockwise.png" : [152, 172, 194, 198],
    "art.png" : [199, 173, 138, 152],
    "articulated_lorry.png" : [112, 135, 124, 143],
    "astonished.png" : [213, 177, 98, 154],
    "atm.png" : [101, 139, 177, 200],
    "b.png" : [199, 94, 94, 200],
    "baby.png" : [215, 195, 179, 127],
    "baby_bottle.png" : [57, 60, 57, 63],
    "baby_chick.png" : [235, 211, 147, 121],
    "baby_symbol.png" : [235, 158, 95, 200],
    "baggage_claim.png" : [105, 142, 217, 200],
    "balloon.png" : [41, 8, 12, 52],
    "bamboo.png" : [203, 207, 193, 87],
    "banana.png" : [64, 56, 30, 71],
    "bangbang.png" : [236, 185, 185, 66],
    "bank.png" : [152, 169, 172, 173],
    "bar_chart.png" : [185, 189, 194, 190],
    "barber.png" : [207, 195, 209, 106],
    "baseball.png" : [178, 172, 172, 164],
    "basketball.png" : [163, 110, 83, 164],
    "bath.png" : [211, 210, 209, 75],
    "bathtub.png" : [216, 216, 216, 69],
    "battery.png" : [46, 68, 49, 87],
    "bear.png" : [183, 160, 121, 152],
    "beer.png" : [214, 193, 163, 139],
    "beers.png" : [215, 191, 153, 144],
    "beetle.png" : [47, 26, 18, 79],
    "beginner.png" : [160, 177, 150, 102],
    "bell.png" : [213, 195, 172, 118],
    "bento.png" : [164, 142, 136, 170],
    "bicyclist.png" : [162, 168, 156, 97],
    "bike.png" : [170, 174, 181, 67],
    "bikini.png" : [238, 198, 218, 59],
    "bird.png" : [184, 189, 187, 123],
    "birthday.png" : [208, 202, 189, 159],
    "black_joker.png" : [198, 195, 193, 150],
    "blossom.png" : [81, 65, 15, 90],
    "blowfish.png" : [35, 30, 23, 54],
    "blue_book.png" : [115, 146, 174, 158],
    "blue_car.png" : [121, 141, 164, 142],
    "blue_heart.png" : [150, 183, 242, 126],
    "blush.png" : [220, 178, 98, 154],
    "boar.png" : [153, 145, 139, 135],
    "boat.png" : [210, 179, 158, 95],
    "bomb.png" : [156, 152, 154, 117],
    "book.png" : [148, 153, 163, 177],
    "bookmark.png" : [213, 203, 201, 85],
    "bookmark_tabs.png" : [212, 213, 215, 156],
    "books.png" : [138, 141, 122, 163],
    "boom.png" : [249, 199, 184, 78],
    "boot.png" : [203, 194, 179, 72],
    "bouquet.png" : [193, 178, 166, 104],
    "bow.png" : [155, 162, 168, 114],
    "bowling.png" : [161, 159, 159, 124],
    "bowtie.png" : [188, 149, 105, 150],
    "boy.png" : [169, 148, 135, 159],
    "bread.png" : [214, 191, 155, 147],
    "bride_with_veil.png" : [164, 143, 136, 206],
    "bridge_at_night.png" : [93, 72, 111, 207],
    "briefcase.png" : [125, 115, 113, 156],
    "broken_heart.png" : [216, 140, 140, 126],
    "bug.png" : [175, 176, 144, 86],
    "bulb.png" : [221, 217, 203, 73],
    "bullettrain_front.png" : [175, 177, 180, 155],
    "bullettrain_side.png" : [172, 176, 202, 167],
    "bus.png" : [177, 158, 132, 161],
    "busstop.png" : [228, 226, 229, 55],
    "bust_in_silhouette.png" : [188, 195, 205, 88],
    "busts_in_silhouette.png" : [150, 160, 174, 131],
    "cactus.png" : [169, 194, 154, 106],
    "cake.png" : [220, 203, 193, 131],
    "calendar.png" : [167, 148, 149, 169],
    "calling.png" : [119, 127, 133, 154],
    "camel.png" : [224, 212, 194, 81],
    "camera.png" : [174, 177, 182, 138],
    "cancer.png" : [162, 106, 186, 200],
    "candy.png" : [205, 207, 210, 60],
    "capital_abcd.png" : [145, 164, 183, 199],
    "capricorn.png" : [165, 111, 188, 200],
    "car.png" : [189, 150, 149, 108],
    "card_index.png" : [161, 161, 160, 181],
    "carousel_horse.png" : [125, 149, 167, 207],
    "cat.png" : [209, 188, 127, 140],
    "cat2.png" : [216, 204, 195, 83],
    "cd.png" : [185, 185, 182, 152],
    "chart.png" : [87, 180, 88, 200],
    "chart_with_downwards_trend.png" : [199, 202, 213, 190],
    "chart_with_upwards_trend.png" : [206, 201, 203, 190],
    "cherries.png" : [169, 123, 121, 129],
    "cherry_blossom.png" : [213, 174, 188, 154],
    "chestnut.png" : [164, 126, 112, 148],
    "chicken.png" : [221, 204, 197, 124],
    "children_crossing.png" : [199, 189, 129, 119],
    "chocolate_bar.png" : [195, 173, 169, 88],
    "christmas_tree.png" : [193, 199, 164, 89],
    "church.png" : [185, 181, 177, 139],
    "cinema.png" : [158, 176, 194, 200],
    "circus_tent.png" : [217, 184, 183, 118],
    "city_sunrise.png" : [177, 121, 64, 207],
    "city_sunset.png" : [135, 91, 62, 207],
    "cl.png" : [208, 102, 105, 198],
    "clap.png" : [196, 170, 147, 137],
    "clapper.png" : [151, 159, 155, 156],
    "clipboard.png" : [183, 170, 157, 188],
    "closed_book.png" : [177, 109, 112, 158],
    "closed_lock_with_key.png" : [210, 185, 151, 152],
    "closed_umbrella.png" : [49, 10, 20, 62],
    "cloud.png" : [230, 232, 238, 96],
    "cn.png" : [217, 120, 106, 137],
    "cocktail.png" : [239, 239, 235, 44],
    "coffee.png" : [167, 165, 163, 114],
    "cold_sweat.png" : [180, 171, 146, 157],
    "collision.png" : [249, 199, 184, 78],
    "computer.png" : [138, 161, 191, 180],
    "confetti_ball.png" : [209, 196, 192, 80],
    "confounded.png" : [140, 103, 24, 154],
    "confused.png" : [232, 197, 119, 153],
    "congratulations.png" : [217, 124, 122, 163],
    "construction.png" : [176, 172, 139, 121],
    "construction_worker.png" : [197, 189, 121, 151],
    "convenience_store.png" : [150, 165, 169, 155],
    "cookie.png" : [156, 123, 93, 151],
    "cool.png" : [146, 167, 188, 200],
    "cop.png" : [145, 145, 146, 178],
    "corn.png" : [194, 193, 156, 113],
    "couple.png" : [151, 125, 125, 148],
    "couple_with_heart.png" : [181, 126, 148, 190],
    "couplekiss.png" : [170, 120, 124, 197],
    "cow.png" : [194, 182, 174, 142],
    "cow2.png" : [191, 188, 187, 84],
    "credit_card.png" : [176, 172, 154, 146],
    "crocodile.png" : [162, 180, 158, 121],
    "crossed_flags.png" : [60, 53, 54, 80],
    "crown.png" : [212, 186, 130, 145],
    "cry.png" : [212, 180, 107, 155],
    "crying_cat_face.png" : [211, 192, 135, 141],
    "crystal_ball.png" : [166, 144, 165, 155],
    "cupid.png" : [210, 158, 214, 131],
    "curry.png" : [187, 178, 173, 105],
    "custard.png" : [178, 165, 146, 116],
    "customs.png" : [91, 132, 215, 200],
    "cyclone.png" : [161, 182, 241, 83],
    "dancer.png" : [212, 179, 176, 74],
    "dancers.png" : [177, 162, 140, 139],
    "dango.png" : [210, 202, 198, 77],
    "dart.png" : [207, 140, 155, 171],
    "dash.png" : [191, 201, 222, 123],
    "date.png" : [178, 148, 149, 210],
    "de.png" : [178, 134, 102, 137],
    "deciduous_tree.png" : [146, 157, 104, 136],
    "department_store.png" : [159, 160, 167, 200],
    "diamond_shape_with_a_dot_inside.png" : [129, 163, 179, 124],
    "diamonds.png" : [208, 191, 191, 154],
    "disappointed.png" : [221, 184, 99, 154],
    "disappointed_relieved.png" : [213, 182, 106, 157],
    "dizzy.png" : [243, 238, 221, 30],
    "dizzy_face.png" : [209, 173, 103, 154],
    "do_not_litter.png" : [156, 110, 103, 164],
    "dog.png" : [197, 187, 178, 145],
    "dog2.png" : [211, 193, 168, 92],
    "dollar.png" : [178, 174, 159, 135],
    "dolls.png" : [143, 109, 114, 178],
    "dolphin.png" : [171, 203, 206, 90],
    "door.png" : [202, 174, 144, 133],
    "doughnut.png" : [152, 133, 119, 122],
    "dragon.png" : [126, 153, 129, 116],
    "dragon_face.png" : [143, 166, 141, 108],
    "dress.png" : [163, 207, 201, 95],
    "dromedary_camel.png" : [228, 212, 191, 77],
    "droplet.png" : [198, 221, 237, 73],
    "dvd.png" : [192, 183, 155, 152],
    "e-mail.png" : [204, 206, 221, 139],
    "ear.png" : [224, 208, 194, 93],
    "ear_of_rice.png" : [208, 214, 188, 52],
    "earth_africa.png" : [130, 171, 149, 166],
    "earth_americas.png" : [114, 162, 165, 166],
    "earth_asia.png" : [121, 166, 161, 166],
    "egg.png" : [166, 163, 155, 133],
    "eggplant.png" : [45, 31, 45, 101],
    "eight.png" : [146, 167, 188, 200],
    "eight_pointed_black_star.png" : [235, 156, 91, 200],
    "eight_spoked_asterisk.png" : [95, 182, 96, 200],
    "electric_plug.png" : [190, 189, 187, 68],
    "elephant.png" : [192, 186, 188, 108],
    "end.png" : [176, 176, 176, 80],
    "es.png" : [218, 161, 109, 137],
    "euro.png" : [183, 189, 175, 144],
    "european_castle.png" : [149, 128, 130, 207],
    "european_post_office.png" : [182, 174, 167, 159],
    "evergreen_tree.png" : [185, 190, 161, 81],
    "exclamation.png" : [246, 218, 218, 33],
    "expressionless.png" : [232, 197, 119, 153],
    "eyeglasses.png" : [165, 167, 169, 80],
    "eyes.png" : [195, 194, 193, 117],
    "facepunch.png" : [101, 80, 61, 127],
    "factory.png" : [150, 142, 143, 207],
    "fallen_leaf.png" : [220, 196, 164, 85],
    "family.png" : [150, 117, 120, 191],
    "fast_forward.png" : [153, 172, 192, 200],
    "fax.png" : [208, 205, 191, 159],
    "fearful.png" : [185, 170, 137, 154],
    "feet.png" : [45, 7, 8, 36],
    "ferris_wheel.png" : [135, 143, 171, 207],
    "file_folder.png" : [171, 176, 182, 165],
    "fire.png" : [242, 210, 158, 97],
    "fire_engine.png" : [162, 115, 113, 184],
    "fireworks.png" : [99, 118, 118, 207],
    "first_quarter_moon.png" : [180, 172, 139, 162],
    "first_quarter_moon_with_face.png" : [242, 232, 191, 80],
    "fish.png" : [191, 203, 216, 98],
    "fish_cake.png" : [236, 223, 230, 149],
    "fishing_pole_and_fish.png" : [189, 191, 195, 57],
    "fist.png" : [208, 182, 160, 141],
    "five.png" : [145, 166, 187, 200],
    "flags.png" : [193, 187, 190, 102],
    "flashlight.png" : [173, 175, 178, 98],
    "floppy_disk.png" : [149, 152, 155, 203],
    "flower_playing_cards.png" : [159, 128, 131, 151],
    "flushed.png" : [138, 102, 42, 154],
    "foggy.png" : [163, 179, 184, 207],
    "football.png" : [153, 130, 129, 154],
    "fork_and_knife.png" : [213, 214, 216, 73],
    "fountain.png" : [108, 135, 136, 207],
    "four.png" : [144, 165, 187, 200],
    "four_leaf_clover.png" : [147, 200, 123, 132],
    "fr.png" : [183, 151, 179, 137],
    "free.png" : [148, 167, 187, 198],
    "fried_shrimp.png" : [209, 159, 132, 133],
    "fries.png" : [204, 152, 110, 148],
    "frog.png" : [135, 180, 142, 129],
    "frowning.png" : [230, 194, 118, 153],
    "fu.png" : [98, 77, 63, 80],
    "fuelpump.png" : [174, 133, 127, 143],
    "full_moon.png" : [239, 226, 157, 162],
    "full_moon_with_face.png" : [235, 218, 134, 162],
    "game_die.png" : [212, 210, 210, 142],
    "gb.png" : [187, 156, 173, 137],
    "gem.png" : [188, 215, 235, 111],
    "gemini.png" : [165, 111, 188, 200],
    "ghost.png" : [195, 191, 192, 154],
    "gift.png" : [210, 167, 131, 143],
    "gift_heart.png" : [224, 164, 169, 137],
    "girl.png" : [149, 128, 115, 171],
    "globe_with_meridians.png" : [130, 147, 163, 106],
    "goat.png" : [217, 217, 209, 79],
    "golf.png" : [202, 203, 166, 90],
    "grapes.png" : [197, 144, 192, 108],
    "green_apple.png" : [146, 169, 109, 160],
    "green_book.png" : [148, 171, 117, 158],
    "green_heart.png" : [172, 222, 150, 128],
    "grey_exclamation.png" : [246, 246, 246, 34],
    "grimacing.png" : [225, 193, 131, 153],
    "grin.png" : [212, 178, 113, 154],
    "grinning.png" : [223, 188, 123, 153],
    "guardsman.png" : [133, 127, 120, 158],
    "guitar.png" : [206, 186, 173, 70],
    "gun.png" : [192, 193, 194, 71],
    "haircut.png" : [173, 137, 135, 164],
    "hamburger.png" : [200, 160, 123, 152],
    "hammer.png" : [25, 13, 7, 52],
    "hamster.png" : [126, 92, 82, 165],
    "hand.png" : [219, 205, 192, 87],
    "handbag.png" : [175, 155, 140, 129],
    "hankey.png" : [177, 162, 149, 115],
    "hash.png" : [148, 169, 189, 200],
    "hatched_chick.png" : [187, 168, 119, 116],
    "hatching_chick.png" : [188, 178, 147, 135],
    "hear_no_evil.png" : [169, 149, 119, 177],
    "heart.png" : [222, 148, 148, 126],
    "heart_decoration.png" : [210, 126, 200, 200],
    "heart_eyes.png" : [215, 167, 96, 154],
    "heart_eyes_cat.png" : [213, 182, 127, 141],
    "heartbeat.png" : [237, 183, 206, 77],
    "heartpulse.png" : [234, 162, 203, 106],
    "hearts.png" : [207, 185, 185, 154],
    "heavy_dollar_sign.png" : [203, 203, 203, 47],
    "heavy_exclamation_mark.png" : [246, 218, 218, 33],
    "heavy_plus_sign.png" : [199, 199, 199, 59],
    "helicopter.png" : [184, 177, 181, 91],
    "herb.png" : [182, 197, 170, 85],
    "hibiscus.png" : [208, 124, 137, 180],
    "high_brightness.png" : [247, 227, 186, 75],
    "high_heel.png" : [200, 152, 151, 103],
    "hocho.png" : [211, 211, 211, 49],
    "honey_pot.png" : [208, 170, 110, 146],
    "honeybee.png" : [186, 179, 154, 126],
    "horse.png" : [170, 162, 143, 132],
    "horse_racing.png" : [177, 174, 169, 89],
    "hospital.png" : [181, 172, 174, 178],
    "hotel.png" : [175, 158, 155, 172],
    "hotsprings.png" : [235, 186, 186, 59],
    "hourglass.png" : [193, 179, 174, 98],
    "hourglass_flowing_sand.png" : [194, 181, 176, 98],
    "house.png" : [207, 205, 193, 107],
    "house_with_garden.png" : [169, 173, 150, 142],
    "hushed.png" : [230, 195, 118, 153],
    "ice_cream.png" : [218, 213, 205, 130],
    "icecream.png" : [214, 203, 178, 91],
    "id.png" : [166, 129, 193, 200],
    "ideograph_advantage.png" : [239, 162, 162, 58],
    "imp.png" : [81, 40, 96, 174],
    "inbox_tray.png" : [202, 199, 208, 130],
    "information_desk_person.png" : [179, 137, 138, 170],
    "information_source.png" : [139, 159, 180, 199],
    "innocent.png" : [188, 165, 105, 171],
    "interrobang.png" : [236, 184, 183, 67],
    "iphone.png" : [133, 134, 134, 140],
    "it.png" : [184, 176, 149, 137],
    "izakaya_lantern.png" : [203, 157, 147, 118],
    "jack_o_lantern.png" : [209, 160, 102, 150],
    "japan.png" : [95, 127, 173, 207],
    "japanese_castle.png" : [143, 163, 161, 207],
    "japanese_goblin.png" : [206, 150, 146, 127],
    "japanese_ogre.png" : [158, 113, 106, 143],
    "jeans.png" : [171, 174, 197, 94],
    "joy.png" : [198, 174, 122, 157],
    "joy_cat.png" : [193, 181, 138, 149],
    "jp.png" : [217, 201, 202, 136],
    "key.png" : [206, 190, 171, 59],
    "keycap_ten.png" : [148, 166, 185, 199],
    "kimono.png" : [216, 180, 137, 128],
    "kiss.png" : [232, 151, 170, 87],
    "kissing.png" : [232, 196, 118, 153],
    "kissing_cat.png" : [210, 171, 107, 142],
    "kissing_closed_eyes.png" : [219, 177, 97, 154],
    "kissing_heart.png" : [214, 173, 93, 158],
    "kissing_smiling_eyes.png" : [231, 195, 118, 153],
    "koala.png" : [170, 162, 160, 151],
    "koko.png" : [149, 169, 189, 200],
    "kr.png" : [201, 195, 198, 136],
    "last_quarter_moon.png" : [181, 177, 149, 162],
    "last_quarter_moon_with_face.png" : [240, 230, 190, 80],
    "laughing.png" : [208, 174, 110, 154],
    "leaves.png" : [36, 54, 8, 89],
    "ledger.png" : [190, 173, 89, 166],
    "left_luggage.png" : [93, 132, 215, 200],
    "left_right_arrow.png" : [146, 164, 184, 199],
    "leftwards_arrow_with_hook.png" : [143, 162, 182, 199],
    "lemon.png" : [217, 206, 133, 128],
    "leo.png" : [164, 110, 188, 200],
    "leopard.png" : [218, 207, 191, 79],
    "libra.png" : [166, 116, 189, 200],
    "light_rail.png" : [126, 137, 163, 193],
    "lips.png" : [207, 173, 181, 83],
    "lipstick.png" : [228, 189, 179, 112],
    "lock.png" : [230, 218, 194, 110],
    "lock_with_ink_pen.png" : [190, 183, 171, 129],
    "lollipop.png" : [188, 175, 163, 103],
    "loop.png" : [122, 169, 221, 152],
    "loudspeaker.png" : [200, 185, 152, 122],
    "love_hotel.png" : [177, 141, 162, 184],
    "love_letter.png" : [222, 199, 197, 139],
    "low_brightness.png" : [249, 239, 217, 38],
    "m.png" : [128, 187, 213, 164],
    "mag_right.png" : [151, 154, 154, 56],
    "mahjong.png" : [199, 179, 163, 165],
    "mailbox.png" : [147, 175, 200, 156],
    "mailbox_closed.png" : [145, 167, 198, 159],
    "mailbox_with_mail.png" : [155, 157, 171, 160],
    "mailbox_with_no_mail.png" : [157, 159, 171, 162],
    "man.png" : [167, 153, 141, 154],
    "man_with_gua_pi_mao.png" : [183, 166, 147, 139],
    "man_with_turban.png" : [185, 164, 155, 161],
    "mans_shoe.png" : [164, 154, 151, 103],
    "maple_leaf.png" : [231, 192, 182, 80],
    "mask.png" : [214, 179, 134, 154],
    "massage.png" : [191, 155, 152, 155],
    "meat_on_bone.png" : [198, 168, 148, 108],
    "mega.png" : [52, 40, 14, 82],
    "melon.png" : [179, 176, 140, 134],
    "memo.png" : [194, 188, 175, 190],
    "mens.png" : [79, 129, 217, 200],
    "metal.png" : [231, 210, 198, 77],
    "metro.png" : [49, 95, 178, 200],
    "microphone.png" : [188, 188, 188, 73],
    "microscope.png" : [195, 195, 195, 87],
    "milky_way.png" : [87, 93, 121, 206],
    "minibus.png" : [145, 147, 151, 176],
    "minidisc.png" : [165, 162, 146, 194],
    "mobile_phone_off.png" : [235, 160, 99, 200],
    "money_with_wings.png" : [192, 190, 174, 136],
    "moneybag.png" : [208, 197, 162, 115],
    "monkey.png" : [187, 179, 165, 102],
    "monkey_face.png" : [185, 171, 150, 140],
    "monorail.png" : [162, 167, 187, 168],
    "moon.png" : [212, 202, 150, 162],
    "mortar_board.png" : [153, 149, 145, 127],
    "mount_fuji.png" : [130, 144, 156, 207],
    "mountain_bicyclist.png" : [167, 143, 116, 199],
    "mountain_cableway.png" : [145, 127, 133, 172],
    "mountain_railway.png" : [138, 148, 142, 221],
    "mouse.png" : [190, 182, 185, 148],
    "mouse2.png" : [229, 225, 224, 67],
    "movie_camera.png" : [128, 128, 129, 124],
    "muscle.png" : [212, 194, 178, 100],
    "mushroom.png" : [217, 169, 157, 129],
    "musical_keyboard.png" : [124, 125, 126, 213],
    "musical_note.png" : [194, 192, 226, 76],
    "mute.png" : [162, 138, 139, 137],
    "nail_care.png" : [225, 193, 196, 115],
    "name_badge.png" : [213, 145, 141, 150],
    "neckbeard.png" : [109, 94, 65, 178],
    "necktie.png" : [142, 160, 182, 191],
    "negative_squared_cross_mark.png" : [110, 193, 106, 199],
    "neutral_face.png" : [220, 183, 107, 154],
    "new.png" : [151, 171, 191, 200],
    "new_moon.png" : [120, 122, 130, 162],
    "new_moon_with_face.png" : [137, 138, 149, 162],
    "newspaper.png" : [184, 184, 183, 182],
    "ng.png" : [146, 166, 189, 198],
    "nine.png" : [146, 167, 188, 200],
    "no_bell.png" : [213, 174, 155, 129],
    "no_bicycles.png" : [150, 104, 97, 164],
    "no_entry.png" : [214, 135, 126, 162],
    "no_entry_sign.png" : [230, 155, 154, 98],
    "no_good.png" : [185, 143, 151, 155],
    "no_mobile_phones.png" : [154, 108, 100, 164],
    "no_mouth.png" : [222, 185, 106, 154],
    "no_pedestrians.png" : [154, 108, 101, 164],
    "no_smoking.png" : [95, 139, 219, 200],
    "non-potable_water.png" : [154, 108, 101, 164],
    "nose.png" : [217, 198, 182, 83],
    "notebook.png" : [134, 133, 133, 160],
    "notebook_with_decorative_cover.png" : [189, 168, 127, 160],
    "o.png" : [235, 176, 176, 78],
    "o2.png" : [198, 91, 91, 200],
    "ocean.png" : [154, 163, 173, 133],
    "octocat.png" : [80, 77, 74, 145],
    "octopus.png" : [181, 135, 140, 147],
    "oden.png" : [186, 178, 171, 82],
    "office.png" : [168, 173, 180, 207],
    "ok.png" : [148, 169, 189, 200],
    "ok_hand.png" : [213, 199, 187, 83],
    "ok_woman.png" : [198, 142, 159, 180],
    "older_man.png" : [205, 184, 166, 151],
    "older_woman.png" : [184, 169, 159, 163],
    "on.png" : [179, 179, 179, 76],
    "oncoming_automobile.png" : [93, 128, 169, 189],
    "oncoming_bus.png" : [149, 158, 146, 195],
    "oncoming_police_car.png" : [142, 148, 152, 201],
    "oncoming_taxi.png" : [166, 167, 130, 166],
    "one.png" : [140, 163, 185, 200],
    "open_file_folder.png" : [163, 169, 175, 165],
    "open_hands.png" : [212, 198, 185, 86],
    "open_mouth.png" : [231, 195, 118, 153],
    "ophiuchus.png" : [166, 112, 189, 200],
    "orange_book.png" : [205, 152, 109, 158],
    "outbox_tray.png" : [203, 199, 208, 130],
    "ox.png" : [195, 168, 145, 101],
    "page_with_curl.png" : [211, 211, 211, 169],
    "pager.png" : [140, 142, 139, 158],
    "palm_tree.png" : [175, 193, 167, 61],
    "panda_face.png" : [179, 179, 179, 159],
    "paperclip.png" : [211, 211, 211, 42],
    "parking.png" : [84, 132, 218, 200],
    "partly_sunny.png" : [227, 220, 210, 127],
    "passport_control.png" : [87, 130, 215, 200],
    "paw_prints.png" : [45, 7, 8, 36],
    "peach.png" : [202, 141, 126, 159],
    "pear.png" : [171, 181, 106, 135],
    "pencil.png" : [194, 188, 175, 190],
    "pencil2.png" : [198, 186, 162, 85],
    "penguin.png" : [176, 176, 169, 124],
    "pensive.png" : [145, 108, 25, 154],
    "performing_arts.png" : [194, 177, 170, 117],
    "persevere.png" : [143, 107, 24, 154],
    "person_frowning.png" : [198, 160, 162, 143],
    "person_with_blond_hair.png" : [200, 179, 147, 154],
    "person_with_pouting_face.png" : [187, 149, 149, 153],
    "phone.png" : [183, 94, 107, 173],
    "pig.png" : [221, 185, 193, 145],
    "pig2.png" : [237, 217, 203, 92],
    "pig_nose.png" : [203, 161, 172, 133],
    "pill.png" : [196, 156, 113, 128],
    "pineapple.png" : [181, 180, 146, 86],
    "pisces.png" : [163, 107, 187, 200],
    "pizza.png" : [204, 175, 155, 92],
    "point_down.png" : [225, 215, 206, 67],
    "point_left.png" : [52, 43, 33, 68],
    "point_right.png" : [52, 43, 33, 68],
    "point_up.png" : [227, 215, 205, 64],
    "point_up_2.png" : [224, 215, 206, 67],
    "police_car.png" : [164, 162, 163, 127],
    "poodle.png" : [198, 194, 191, 118],
    "poop.png" : [177, 162, 149, 115],
    "post_office.png" : [190, 182, 170, 165],
    "postal_horn.png" : [207, 195, 179, 62],
    "postbox.png" : [199, 143, 139, 142],
    "potable_water.png" : [84, 127, 214, 200],
    "pouch.png" : [226, 201, 166, 132],
    "poultry_leg.png" : [202, 184, 173, 83],
    "pound.png" : [185, 179, 177, 144],
    "pouting_cat.png" : [229, 207, 151, 119],
    "pray.png" : [193, 182, 155, 123],
    "princess.png" : [177, 149, 101, 201],
    "punch.png" : [101, 80, 61, 127],
    "purple_heart.png" : [208, 164, 242, 126],
    "purse.png" : [209, 152, 177, 144],
    "pushpin.png" : [172, 139, 139, 67],
    "put_litter_in_its_place.png" : [133, 154, 177, 200],
    "question.png" : [246, 221, 221, 32],
    "rabbit.png" : [185, 179, 181, 131],
    "rabbit2.png" : [233, 230, 229, 79],
    "racehorse.png" : [192, 189, 173, 74],
    "radio.png" : [177, 162, 135, 155],
    "rage.png" : [201, 125, 89, 154],
    "railway_car.png" : [160, 162, 149, 183],
    "rainbow.png" : [119, 152, 154, 207],
    "raised_hand.png" : [219, 205, 192, 87],
    "raised_hands.png" : [191, 180, 166, 112],
    "raising_hand.png" : [196, 154, 157, 157],
    "ram.png" : [216, 213, 196, 111],
    "ramen.png" : [166, 155, 138, 142],
    "rat.png" : [183, 177, 176, 102],
    "recycle.png" : [145, 194, 148, 117],
    "red_car.png" : [189, 150, 149, 108],
    "relaxed.png" : [219, 178, 97, 154],
    "relieved.png" : [218, 182, 98, 154],
    "repeat.png" : [152, 172, 194, 198],
    "repeat_one.png" : [152, 172, 194, 198],
    "restroom.png" : [154, 174, 193, 200],
    "revolving_hearts.png" : [238, 158, 203, 118],
    "rewind.png" : [153, 172, 192, 200],
    "ribbon.png" : [217, 146, 187, 128],
    "rice.png" : [102, 102, 102, 146],
    "rice_ball.png" : [190, 190, 186, 129],
    "rice_cracker.png" : [174, 139, 110, 153],
    "rice_scene.png" : [111, 124, 128, 219],
    "ring.png" : [193, 200, 200, 77],
    "rocket.png" : [197, 174, 167, 114],
    "roller_coaster.png" : [153, 149, 157, 207],
    "rooster.png" : [225, 211, 206, 100],
    "rose.png" : [207, 170, 159, 93],
    "rotating_light.png" : [219, 139, 144, 151],
    "round_pushpin.png" : [234, 211, 212, 46],
    "rowboat.png" : [156, 172, 184, 144],
    "ru.png" : [185, 160, 187, 137],
    "rugby_football.png" : [193, 148, 99, 170],
    "runner.png" : [208, 203, 208, 57],
    "running.png" : [208, 203, 208, 57],
    "running_shirt_with_sash.png" : [144, 202, 235, 147],
    "sa.png" : [84, 131, 217, 200],
    "sagittarius.png" : [162, 106, 186, 200],
    "sailboat.png" : [210, 179, 158, 95],
    "sake.png" : [195, 186, 158, 110],
    "sandal.png" : [219, 212, 199, 67],
    "santa.png" : [188, 150, 145, 171],
    "satellite.png" : [175, 175, 164, 140],
    "satisfied.png" : [208, 174, 110, 154],
    "saxophone.png" : [213, 204, 182, 61],
    "school.png" : [190, 186, 135, 175],
    "school_satchel.png" : [168, 99, 111, 160],
    "scissors.png" : [38, 23, 23, 60],
    "scorpius.png" : [163, 106, 187, 200],
    "scream.png" : [115, 99, 69, 163],
    "scream_cat.png" : [209, 185, 126, 157],
    "scroll.png" : [204, 184, 159, 183],
    "seat.png" : [168, 172, 187, 123],
    "secret.png" : [217, 127, 125, 163],
    "see_no_evil.png" : [175, 156, 130, 161],
    "seedling.png" : [224, 238, 221, 30],
    "seven.png" : [141, 163, 185, 200],
    "shaved_ice.png" : [215, 190, 196, 127],
    "sheep.png" : [217, 210, 196, 108],
    "shell.png" : [207, 200, 199, 123],
    "ship.png" : [125, 129, 140, 207],
    "shirt.png" : [161, 174, 194, 134],
    "shit.png" : [177, 162, 149, 115],
    "shoe.png" : [164, 154, 151, 103],
    "shower.png" : [159, 210, 216, 63],
    "signal_strength.png" : [153, 173, 192, 200],
    "six.png" : [146, 167, 188, 200],
    "six_pointed_star.png" : [164, 112, 187, 200],
    "ski.png" : [7, 41, 31, 57],
    "sleeping.png" : [219, 186, 115, 158],
    "sleepy.png" : [207, 175, 102, 160],
    "slot_machine.png" : [151, 139, 140, 184],
    "smile.png" : [210, 175, 105, 154],
    "smile_cat.png" : [210, 188, 131, 141],
    "smiley.png" : [210, 173, 103, 154],
    "smiley_cat.png" : [211, 189, 131, 141],
    "smiling_imp.png" : [132, 85, 145, 174],
    "smirk.png" : [218, 182, 98, 154],
    "smirk_cat.png" : [219, 194, 129, 141],
    "smoking.png" : [180, 177, 174, 48],
    "snail.png" : [189, 168, 144, 132],
    "snake.png" : [131, 182, 147, 114],
    "snowboarder.png" : [208, 205, 200, 164],
    "snowflake.png" : [222, 233, 247, 86],
    "snowman.png" : [197, 197, 201, 101],
    "sob.png" : [126, 100, 44, 154],
    "soccer.png" : [147, 147, 147, 164],
    "soon.png" : [170, 170, 170, 84],
    "sos.png" : [207, 101, 103, 198],
    "sound.png" : [162, 162, 162, 107],
    "space_invader.png" : [132, 120, 150, 141],
    "spaghetti.png" : [190, 172, 151, 121],
    "sparkler.png" : [93, 109, 119, 207],
    "sparkles.png" : [249, 236, 210, 33],
    "sparkling_heart.png" : [234, 143, 179, 139],
    "speak_no_evil.png" : [181, 163, 138, 153],
    "speaker.png" : [152, 152, 152, 123],
    "speedboat.png" : [221, 204, 176, 87],
    "squirrel.png" : [152, 147, 143, 169],
    "star.png" : [246, 233, 193, 81],
    "star2.png" : [249, 235, 196, 86],
    "stars.png" : [90, 112, 121, 207],
    "station.png" : [141, 144, 144, 143],
    "statue_of_liberty.png" : [118, 148, 162, 207],
    "steam_locomotive.png" : [162, 139, 133, 143],
    "stew.png" : [157, 156, 151, 114],
    "straight_ruler.png" : [189, 194, 203, 87],
    "strawberry.png" : [202, 151, 142, 118],
    "stuck_out_tongue.png" : [228, 186, 124, 154],
    "stuck_out_tongue_closed_eyes.png" : [217, 173, 106, 155],
    "stuck_out_tongue_winking_eye.png" : [214, 174, 115, 155],
    "sun_with_face.png" : [236, 191, 111, 150],
    "sunflower.png" : [198, 180, 129, 112],
    "sunglasses.png" : [192, 163, 104, 154],
    "sunny.png" : [248, 215, 154, 102],
    "sunrise.png" : [192, 129, 77, 207],
    "sunrise_over_mountains.png" : [141, 119, 112, 207],
    "surfer.png" : [141, 176, 166, 144],
    "sushi.png" : [209, 152, 148, 128],
    "suspension_railway.png" : [152, 146, 127, 195],
    "sweat.png" : [207, 181, 109, 158],
    "sweat_drops.png" : [178, 204, 227, 84],
    "sweat_smile.png" : [201, 172, 117, 155],
    "sweet_potato.png" : [174, 153, 137, 122],
    "swimmer.png" : [146, 194, 194, 147],
    "symbols.png" : [145, 164, 183, 199],
    "syringe.png" : [27, 16, 17, 47],
    "tada.png" : [203, 181, 176, 87],
    "tanabata_tree.png" : [203, 193, 180, 72],
    "tangerine.png" : [210, 155, 105, 150],
    "taurus.png" : [163, 108, 187, 200],
    "taxi.png" : [191, 175, 132, 124],
    "tea.png" : [160, 158, 142, 157],
    "telephone.png" : [183, 94, 107, 173],
    "telescope.png" : [221, 222, 222, 74],
    "tennis.png" : [169, 195, 95, 164],
    "tent.png" : [107, 111, 84, 207],
    "three.png" : [144, 166, 187, 200],
    "thumbsdown.png" : [211, 192, 175, 116],
    "thumbsup.png" : [91, 71, 54, 116],
    "ticket.png" : [195, 193, 164, 116],
    "tiger.png" : [204, 184, 126, 143],
    "tiger2.png" : [200, 181, 160, 89],
    "tired_face.png" : [208, 171, 105, 154],
    "tokyo_tower.png" : [165, 163, 173, 207],
    "tomato.png" : [201, 136, 111, 152],
    "tongue.png" : [212, 177, 187, 117],
    "top.png" : [148, 169, 190, 200],
    "tophat.png" : [149, 147, 137, 136],
    "tractor.png" : [178, 169, 144, 131],
    "traffic_light.png" : [168, 166, 162, 109],
    "train.png" : [154, 157, 143, 183],
    "train2.png" : [183, 182, 184, 155],
    "tram.png" : [149, 154, 153, 140],
    "triangular_flag_on_post.png" : [246, 229, 225, 32],
    "triangular_ruler.png" : [200, 204, 213, 88],
    "triumph.png" : [212, 182, 119, 163],
    "trolleybus.png" : [137, 149, 170, 164],
    "trophy.png" : [197, 181, 154, 114],
    "tropical_drink.png" : [226, 208, 188, 90],
    "tropical_fish.png" : [190, 204, 169, 121],
    "truck.png" : [175, 146, 85, 178],
    "trumpet.png" : [209, 202, 183, 53],
    "tshirt.png" : [161, 174, 194, 134],
    "tulip.png" : [186, 171, 175, 107],
    "turtle.png" : [163, 184, 156, 103],
    "tv.png" : [137, 125, 114, 163],
    "twisted_rightwards_arrows.png" : [149, 170, 192, 201],
    "two.png" : [145, 166, 187, 200],
    "two_hearts.png" : [244, 194, 223, 73],
    "two_men_holding_hands.png" : [146, 129, 125, 146],
    "two_women_holding_hands.png" : [177, 130, 130, 152],
    "u5272.png" : [213, 109, 154, 200],
    "u5408.png" : [216, 109, 108, 199],
    "u55b6.png" : [235, 157, 99, 200],
    "u6307.png" : [100, 183, 101, 200],
    "u6708.png" : [235, 155, 91, 200],
    "u6709.png" : [235, 156, 95, 200],
    "u6e80.png" : [214, 109, 107, 200],
    "u7121.png" : [235, 158, 100, 200],
    "u7533.png" : [235, 156, 94, 200],
    "u7981.png" : [217, 117, 117, 199],
    "u7a7a.png" : [118, 101, 188, 200],
    "uk.png" : [187, 156, 173, 137],
    "umbrella.png" : [187, 184, 230, 90],
    "unamused.png" : [219, 182, 98, 154],
    "underage.png" : [183, 130, 124, 163],
    "unlock.png" : [232, 221, 198, 106],
    "up.png" : [157, 177, 194, 199],
    "us.png" : [194, 159, 171, 137],
    "v.png" : [217, 201, 188, 88],
    "vertical_traffic_light.png" : [164, 162, 158, 106],
    "vhs.png" : [154, 155, 158, 138],
    "vibration_mode.png" : [235, 156, 94, 200],
    "video_camera.png" : [169, 172, 178, 132],
    "video_game.png" : [117, 116, 117, 120],
    "violin.png" : [205, 184, 176, 69],
    "virgo.png" : [164, 110, 188, 200],
    "volcano.png" : [153, 99, 79, 207],
    "vs.png" : [235, 154, 85, 200],
    "walking.png" : [215, 212, 217, 48],
    "waning_crescent_moon.png" : [147, 145, 137, 162],
    "waning_gibbous_moon.png" : [212, 205, 154, 162],
    "warning.png" : [199, 182, 114, 123],
    "watch.png" : [201, 201, 201, 125],
    "water_buffalo.png" : [166, 163, 163, 85],
    "watermelon.png" : [218, 177, 173, 110],
    "wave.png" : [219, 205, 192, 98],
    "waxing_crescent_moon.png" : [150, 147, 135, 162],
    "waxing_gibbous_moon.png" : [212, 202, 150, 162],
    "wc.png" : [92, 138, 219, 200],
    "weary.png" : [208, 172, 105, 154],
    "wedding.png" : [183, 157, 165, 156],
    "whale.png" : [167, 193, 208, 103],
    "whale2.png" : [177, 185, 197, 105],
    "wheelchair.png" : [87, 133, 217, 200],
    "wind_chime.png" : [222, 230, 236, 59],
    "wine_glass.png" : [213, 197, 200, 77],
    "wink.png" : [219, 182, 98, 154],
    "wolf.png" : [182, 172, 145, 128],
    "woman.png" : [154, 113, 97, 199],
    "womans_clothes.png" : [199, 168, 188, 122],
    "womans_hat.png" : [167, 169, 126, 162],
    "womens.png" : [206, 107, 194, 200],
    "worried.png" : [229, 193, 117, 153],
    "wrench.png" : [224, 224, 225, 67],
    "x.png" : [235, 177, 177, 76],
    "yellow_heart.png" : [246, 223, 157, 126],
    "yen.png" : [175, 168, 154, 135],
    "yum.png" : [217, 179, 109, 156],
    "zap.png" : [253, 236, 214, 40],
    "zero.png" : [146, 167, 188, 200],
    "zzz.png" : [203, 210, 226, 42],
  };
})(artihata || (artihata = {}));
;var artihata;

(function (artihata) {
  var RGBA = (function () {
    function RGBA(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    RGBA.prototype.compare = function (rgba) {
      var sumDifference = 0;
      sumDifference += Math.abs(this.r - rgba.r);
      sumDifference += Math.abs(this.g - rgba.g);
      sumDifference += Math.abs(this.b - rgba.b);
      sumDifference += Math.abs(this.a - rgba.a);
      return sumDifference;
    }

    return RGBA;
  })();

  function getEmojiName(rgba, rgbaMap) {
    var beforeDifference = 200000 // 十分に大きい数;
    var targetEmojiName;
    for (var emojiName in rgbaMap) {
      var baseRGBAList = rgbaMap[emojiName];
      var baseRGBA = new RGBA(baseRGBAList[0], baseRGBAList[1], baseRGBAList[2], baseRGBAList[3])
      var difference = baseRGBA.compare(rgba);
      if (beforeDifference > difference) {
        beforeDifference = difference;
        targetEmojiName = emojiName;
      }
    }  
    return targetEmojiName;
  }

  function createBaseImg(id) {
    var img = document.createElement("img");
    img.id =  ":" + id + ":";
    img.class = "emoji"; 
    img.title = ":" + id + ":"; 
    img.alt = ":" + id + ":";
    img.src = "img/emoji/" + id + ".png"; 
    img.height="20";
    img.width="20";
    img.align="absmiddle";
    img.draggable="true";
    img.addEventListener("dragstart", dragStart)
    return img;
  }

  function createDropboxDiv(id) {
    var div = document.createElement("span");
    div.id = id;
    div.addEventListener("dragstart", dragStart)
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", drop);
    return div;
  }

  function initPallet(pallet, height, width) {
    for (var i=pallet.childNodes.length-1;i>=0; i--) {
      pallet.removeChild(pallet.childNodes[i]);
    }

    for (var i=0;i<artihata.EMOJI_TEMPLATE.length;i++) {
      var img = createBaseImg(artihata.EMOJI_TEMPLATE[i]);
      pallet.appendChild(img);
      if ((i+1)%40 == 0) {
        var br = document.createElement("br");
        pallet.appendChild(br);
      }
    }
    return pallet;
  }

  function initDropbox(dropbox) {
    for (var i =dropbox.childNodes.length-1; i>=0; i--) {
      dropbox.removeChild(dropbox.childNodes[i]);
    }
    for (var y=0;y<height;y++) {
      for (var x=0;x<width;x++) {
        var div = createDropboxDiv(x+"_"+y+"_"+"dropbox")
        var img = createBaseImg("arrow_down");
        div.appendChild(img);
        dropbox.appendChild(div);
      }
      var br = document.createElement("br")
      dropbox.appendChild(br);
    }
  }

  function clickHandler (e) {
    width = document.getElementById("width_button").value;
    height = document.getElementById("height_button").value;

    var pallet = document.getElementById("pallet");
    initPallet(pallet, height, width);

    var dropbox = document.getElementById("dropbox");
    initDropbox(dropbox);
  }


  function putText(text) {
    var generateTextInput = document.getElementById("generate_text"); 
    generateTextInput.value = text;
  }

  function formatFileNameToEmojiName(fileName) {
    var emojiName = fileName.slice(0,-4);
    return ":" + emojiName + ":";
  }

  function serializeTableToText(table) {
    var outputText = "";
    for (var j in table) {
      for (var i in table[j]) {
        outputText += formatFileNameToEmojiName(table[j][i]);
      }
        outputText += "\n";
    }
    return outputText;
  }

  function dragStart(event){
    event.dataTransfer.setData("text", event.target.id);
  }

  function dragOver(event){
    event.preventDefault();
  }
  function drop(event){
    var idName = event.dataTransfer.getData("text");
    var dragElem = document.getElementById(idName);
    var copyDragElem = dragElem.cloneNode(true);
    event.currentTarget.childNodes[0].remove();
    event.currentTarget.appendChild(copyDragElem);
    event.preventDefault();

    var dropbox = document.getElementById('dropbox');
    var outputText = "";
    for(var i=0;i<dropbox.childNodes.length;i++) {
      var childNode = dropbox.childNodes[i].childNodes[0];
      if (childNode) {
        outputText += childNode.id;
      } else {
        outputText += "\n";
      }
    }

    putText(outputText);
  }

  var selectFileButton = document.getElementById("selectfile");
  selectFileButton.addEventListener("change", function(event) {
    var file = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function() {
      var img = new Image();
      img.onload = function() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var width = img.width;
        if (width > 34) {
          width = 34;
        }
        var height = img.height;
        canvas.width = width;
        canvas.height = height;
        context.drawImage(img, 0, 0);

        var srcData = context.getImageData(0, 0, width, height);
        var dstData = context.createImageData(width, height);
        var src = srcData.data;
        var dst = dstData.data;

        var emojiList = [];
        for (var i = 0; i < height; i++) {
          var emojiRowList = [];
          for (var j = 0; j < width; j++) {
            var idx = (j + i * width) * 4;
            var r = src[idx];
            var g = src[idx+1];
            var b = src[idx+2];
            var a = src[idx+3];
            var rgba = new RGBA(r,g,b,a);
            var emojiName = getEmojiName(rgba, artihata.EMOJI_RGBA_MAP);
            emojiRowList.push(emojiName); 
          }
          emojiList.push(emojiRowList);
        }
        putText(serializeTableToText(emojiList));
      }
      img.src = reader.result;
    }
  }, false);

  var generateButton = document.getElementById("generate_button");
  document.addEventListener('DOMContentLoaded', function () {
      generateButton.addEventListener("click", clickHandler);
  });

})(artihata || (artihata = {}));

