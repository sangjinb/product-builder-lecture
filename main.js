const snacks = [
    { 
        name: '치킨', 
        image: 'assets/snacks/chicken.svg', 
        description: '오늘 밤, 바삭한 튀김옷과 촉촉한 속살로 스트레스를 날려버리세요! 야식의 왕, 치킨!',
        long_description: '치킨은 전 세계적으로 사랑받는 대표적인 닭 요리로, 특히 한국에서는 밤늦은 시간 즐겨 찾는 국민 야식입니다. 바삭하게 튀겨낸 껍질과 육즙 가득한 부드러운 살코기의 조화는 한 번 맛보면 잊을 수 없는 즐거움을 선사합니다. 양념, 후라이드, 간장, 마늘 등 다양한 맛으로 즐길 수 있어 취향에 따라 선택의 폭이 넓습니다.',
        origin: '치킨의 원형은 고대 이집트와 로마 시대부터 존재했지만, 현재와 같은 튀긴 닭 요리는 미국의 남부 지방에서 발전했습니다. 1970년대 이후 한국에 도입되어 한국인의 입맛에 맞춰 다양한 양념과 조리법이 개발되며 독자적인 치킨 문화를 형성했습니다.',
        pairings: '시원한 맥주(치맥), 탄산음료, 치킨무, 케첩, 머스타드 소스, 매콤한 떡볶이',
        why_late_night: '하루의 피로를 날려주는 마법 같은 맛과 넉넉한 양으로, 밤늦게 출출할 때 친구, 가족과 함께 즐기기 완벽합니다. 특히 매콤한 양념 치킨은 스트레스 해소에도 최고입니다.'
    },
    { 
        name: '피자', 
        image: 'assets/snacks/pizza.svg', 
        description: '쭉 늘어나는 치즈와 풍부한 토핑의 향연! 친구와 함께 즐기면 더욱 맛있는 피자!',
        long_description: '피자는 이탈리아에서 시작된 음식으로, 밀가루 반죽 위에 토마토 소스를 바르고 치즈, 고기, 채소 등 다양한 토핑을 올려 구워낸 요리입니다. 한 조각만으로도 든든함을 느낄 수 있으며, 여러 명이 함께 나눠 먹기 좋아 파티나 모임에 빠질 수 없는 메뉴입니다. 짭짤한 맛과 풍부한 영양은 밤샘 작업이나 공부 중에도 활력을 불어넣어 줍니다.',
        origin: '피자의 기원은 고대 이집트, 그리스 시대의 납작한 빵에 토핑을 얹어 먹던 것에서 찾을 수 있습니다. 현대적인 피자의 형태는 18세기 이탈리아 나폴리에서 시작되었으며, 마르게리타 피자가 특히 유명합니다. 20세기 초 이탈리아 이민자들을 통해 미국으로 건너가 전 세계적으로 대중화되었습니다.',
        pairings: '콜라, 사이다, 맥주, 피클, 핫소스, 갈릭 디핑 소스',
        why_late_night: '간편하게 주문할 수 있고, 다양한 맛을 한 번에 즐길 수 있어 여럿이 함께 즐기기 좋습니다. 특히 짭짤한 맛은 밤늦게 집중력을 요하는 작업 중에 활력을 줍니다.'
    },
    { 
        name: '족발', 
        image: 'assets/snacks/jokbal.svg', 
        description: '쫄깃한 껍데기와 부드러운 살코기의 완벽한 조화. 새우젓에 콕 찍어 즐겨보세요.',
        long_description: '족발은 돼지 발을 간장 양념에 삶아 만든 한국의 전통 야식입니다. 콜라겐이 풍부한 쫄깃한 껍데기와 부드러운 살코기가 일품이며, 특유의 향과 맛이 어우러져 남녀노소 모두에게 사랑받는 메뉴입니다. 새우젓, 상추, 마늘, 고추와 함께 싸 먹으면 더욱 풍부한 맛을 느낄 수 있습니다.',
        origin: '족발은 한국의 전통 음식으로, 오랜 역사 동안 서민들의 보양식이나 술안주로 즐겨왔습니다. 특히 1960년대 이후 서울의 장충동에서 족발 전문점들이 생겨나면서 대중적인 야식 메뉴로 자리 잡았습니다. 지역별로 조리법이나 맛에 차이가 있으며, 냉채족발, 불족발 등 다양한 변형이 존재합니다.',
        pairings: '소주, 막걸리, 맥주, 새우젓, 쌈장, 상추, 마늘, 고추, 쟁반국수',
        why_late_night: '쫄깃한 식감과 고소한 맛이 일품이며, 단백질과 콜라겐이 풍부하여 밤늦게 허기질 때 든든하게 즐길 수 있습니다. 특히 매운 족발은 스트레스를 해소하는 데 도움을 줍니다.'
    },
    { 
        name: '보쌈', 
        image: 'assets/snacks/bossam.svg', 
        description: '기름기는 쏙 빼고 담백함만 남았다! 김치와 함께 싸먹는 부드러운 보쌈 한 점.',
        long_description: '보쌈은 돼지고기를 삶아 기름기를 제거하고 얇게 썰어 김치, 무말랭이, 마늘, 고추 등과 함께 싸 먹는 한국의 대표적인 야식입니다. 담백하고 부드러운 고기 맛과 아삭하고 매콤한 김치의 조화가 환상적입니다. 술안주로도 좋고, 식사 대용으로도 손색없는 건강하고 맛있는 메뉴입니다.',
        origin: '보쌈은 조선시대부터 즐겨 먹던 전통 음식으로, 김장철에 갓 담근 김치와 함께 먹던 풍습에서 유래했습니다. 돼지고기를 삶아 따뜻하게 데워 먹는 것이 특징이며, 지역별로 사용하는 돼지고기 부위나 곁들이는 김치 종류에 차이가 있습니다.',
        pairings: '소주, 막걸리, 맥주, 김치, 무말랭이, 쌈장, 마늘, 고추, 굴',
        why_late_night: '기름기가 적고 담백하여 밤늦게 먹어도 부담이 적습니다. 신선한 채소와 함께 섭취하여 영양 균형을 맞출 수 있으며, 술안주로도 훌륭합니다.'
    },
    { 
        name: '떡볶이', 
        image: 'assets/snacks/tteokbokki.svg', 
        description: '매콤달콤한 소스에 쫀득한 떡, 그리고 바삭한 튀김까지! 멈출 수 없는 중독적인 맛.',
        long_description: '떡볶이는 쫄깃한 떡을 매콤달콤한 고추장 양념에 볶아 만든 한국의 대표적인 길거리 음식입니다. 어묵, 파, 삶은 계란 등을 넣어 함께 조리하며, 최근에는 치즈, 소시지, 해산물 등 다양한 토핑을 추가하여 더욱 풍성하게 즐길 수 있습니다. 학생들부터 성인까지 모두에게 사랑받는 국민 야식 메뉴입니다.',
        origin: '떡볶이의 기원은 조선시대 궁중 떡볶이에서 찾을 수 있지만, 현재와 같은 매콤한 떡볶이는 한국 전쟁 이후 고추장이 대중화되면서 발전했습니다. 특히 1970년대 이후 분식점에서 저렴하고 맛있는 간식으로 인기를 얻으며 국민 음식으로 자리 잡았습니다.',
        pairings: '쿨피스, 단무지, 김밥, 튀김, 순대, 어묵 국물',
        why_late_night: '매콤달콤한 맛은 스트레스 해소에 탁월하며, 쫀득한 떡과 다양한 재료는 든든함을 줍니다. 밤늦게 허기질 때 간편하게 주문하거나 직접 만들어 먹기 좋습니다.'
    },
    { 
        name: '라면', 
        image: 'assets/snacks/ramen.svg', 
        description: '세상에서 가장 맛있는 라면은? 바로 지금 끓여먹는 라면! 간단하지만 완벽한 야식.',
        long_description: '라면은 밀가루 면을 스프와 함께 끓여 먹는 간편한 인스턴트 식품으로, 한국인에게는 소울 푸드이자 대표적인 야식입니다. 짧은 시간에 조리할 수 있고, 매콤하고 감칠맛 나는 국물은 피로를 풀어주는 효과가 있습니다. 계란, 파, 콩나물 등 다양한 재료를 추가하여 더욱 풍성하게 즐길 수 있습니다.',
        origin: '라면은 20세기 초 일본에서 개발되었으며, 한국에는 1960년대 초에 처음 도입되었습니다. 한국인의 입맛에 맞춰 얼큰하고 매콤한 맛을 강조한 제품들이 출시되면서 폭발적인 인기를 얻었고, 이후 다양한 종류의 라면이 개발되며 한국인의 식탁에서 빼놓을 수 없는 존재가 되었습니다.',
        pairings: '김치, 단무지, 밥(국물에 말아먹기), 김밥, 계란, 파',
        why_late_night: '간편하게 조리할 수 있어 밤늦게 출출할 때 최고의 선택입니다. 따뜻하고 얼큰한 국물은 속을 편안하게 해주고, 스트레스를 해소하는 데 도움을 줍니다.'
    },
    { 
        name: '김치전', 
        image: 'assets/snacks/kimchi-jeon.svg', 
        description: '비 오는 날엔 역시 김치전! 막걸리 한 잔과 함께라면 여기가 바로 지상낙원.',
        long_description: '김치전은 잘 익은 김치를 밀가루 반죽에 섞어 기름에 노릇하게 지져낸 한국의 전통 부침개입니다. 매콤하고 고소한 맛과 바삭한 식감이 일품이며, 특히 비 오는 날 막걸리와 함께 즐겨 먹는 대표적인 메뉴입니다. 집에서 간편하게 만들 수 있어 더욱 매력적입니다.',
        origin: '김치전은 한국의 김장 문화와 함께 발전한 음식으로, 남은 김치를 활용하기 위해 시작되었습니다. 조선시대부터 다양한 부침개가 존재했으며, 김치전은 그중에서도 서민들이 즐겨 먹던 대중적인 음식입니다. 지역별로 사용하는 김치의 종류나 추가 재료에 따라 맛에 차이가 있습니다.',
        pairings: '막걸리, 동동주, 간장 양념, 양파 장아찌',
        why_late_night: '집에서 간단히 만들 수 있고, 따뜻하고 고소한 맛은 밤늦게 허기진 배를 든든하게 채워줍니다. 특히 비 오는 밤에는 분위기와 맛을 동시에 잡을 수 있는 최고의 야식입니다.'
    },
    { 
        name: '파전', 
        image: 'assets/snacks/pajeon.svg', 
        description: '해물과 파가 듬뿍! 고소한 기름 냄새가 코를 자극하는 바삭바삭 해물파전.',
        long_description: '파전은 밀가루 반죽에 파를 듬뿍 넣고 해물, 계란 등을 올려 기름에 지져낸 한국의 대표적인 부침개입니다. 특히 동래파전이 유명하며, 바삭한 가장자리와 촉촉한 속의 조화가 일품입니다. 고소한 기름 냄새와 해물의 풍미가 어우러져 막걸리 안주로 최고입니다.',
        origin: '파전은 조선시대부터 부산 동래 지역에서 유래한 것으로 알려져 있습니다. 당시 동래 지역은 해산물이 풍부하여 파와 해산물을 넣어 부쳐 먹는 파전이 발전했습니다. 이후 전국적으로 퍼져나가며 다양한 재료와 조리법이 생겨났습니다.',
        pairings: '막걸리, 간장 양념, 양파 장아찌, 해물탕',
        why_late_night: '따뜻하고 고소한 맛은 밤늦게 허기진 배를 든든하게 채워줍니다. 특히 해물이 듬뿍 들어간 파전은 영양 보충에도 좋습니다. 집에서 만들기도 비교적 간편합니다.'
    },
    { 
        name: '곱창', 
        image: 'assets/snacks/gopchang.svg', 
        description: '고소한 곱이 가득! 씹을수록 퍼지는 진한 풍미에 빠져보세요. 볶음밥은 필수!',
        long_description: '곱창은 소나 돼지의 작은 창자를 구이 또는 전골로 즐기는 한국의 인기 야식입니다. 특유의 고소한 곱과 쫄깃한 식감이 일품이며, 술안주로 특히 사랑받습니다. 매콤한 양념에 볶아 먹거나, 깨끗하게 손질하여 소금구이로 즐기기도 합니다. 마지막에 볶음밥은 빼놓을 수 없는 코스입니다.',
        origin: '곱창은 한국의 전통 음식으로, 소나 돼지의 내장을 활용한 다양한 요리 중 하나입니다. 과거에는 비교적 저렴한 가격에 단백질을 섭취할 수 있는 음식으로 여겨졌으며, 1970년대 이후 곱창 전문점들이 생겨나면서 대중적인 야식 및 술안주로 자리 잡았습니다.',
        pairings: '소주, 맥주, 부추 무침, 양파 장아찌, 볶음밥',
        why_late_night: '고소하고 기름진 맛은 지친 몸에 활력을 불어넣어 주며, 술안주로 최고의 궁합을 자랑합니다. 특히 스트레스 해소에도 탁월한 효과가 있습니다.'
    },
    { 
        name: '닭발', 
        image: 'assets/snacks/dakbal.svg', 
        description: '화끈한 매운맛으로 스트레스 타파! 쫀득한 식감에 자꾸만 손이 가는 매력 만점 닭발.',
        long_description: '닭발은 닭의 발을 매콤한 양념에 볶거나 구워 먹는 한국의 이색적인 야식입니다. 뼈 없는 닭발과 뼈 있는 닭발 두 가지 형태로 즐길 수 있으며, 쫀득한 콜라겐 덩어리로 독특한 식감을 자랑합니다. 중독성 있는 매운맛은 스트레스 해소에 탁월하며, 술안주로 많은 사랑을 받고 있습니다.',
        origin: '닭발은 한국의 전통적인 길거리 음식 중 하나로, 과거부터 저렴하고 맛있는 술안주로 즐겨왔습니다. 특히 매운 양념을 사용하여 한국인의 입맛에 맞게 발전했으며, 1990년대 이후 매운맛 열풍과 함께 더욱 대중적인 야식 메뉴로 자리 잡았습니다.',
        pairings: '소주, 막걸리, 맥주, 계란찜, 주먹밥, 쿨피스',
        why_late_night: '화끈하게 매운맛은 스트레스 해소에 직효이며, 쫀득한 식감은 먹는 즐거움을 더해줍니다. 콜라겐 덩어리로 피부 미용에도 좋다고 알려져 있습니다.'
    },
    { 
        name: '아이스크림', 
        image: 'assets/snacks/icecream.svg', 
        description: '이불 속에서 즐기는 달콤한 행복. 오늘 하루 수고한 나를 위한 완벽한 디저트.',
        long_description: '아이스크림은 우유, 설탕, 향료 등을 섞어 얼려 만든 차가운 디저트로, 전 세계적으로 사랑받는 간식입니다. 부드러운 식감과 달콤한 맛은 지친 몸과 마음을 달래주는 효과가 있습니다. 밤늦게 간단하게 즐길 수 있는 최고의 디저트이자 스트레스 해소 음식입니다.',
        origin: '아이스크림의 역사는 고대 중국과 로마 시대의 얼음 디저트에서 시작됩니다. 13세기 마르코 폴로에 의해 이탈리아에 전파되었고, 이후 유럽 전역으로 퍼져 다양한 형태로 발전했습니다. 17세기 이후 대중화되었으며, 현대와 같은 아이스크림은 19세기 냉장 기술의 발달로 가능해졌습니다.',
        pairings: '커피, 과일, 초콜릿 시럽, 견과류, 와플, 케이크',
        why_late_night: '달콤한 맛은 기분 전환에 좋고, 차가운 온도는 졸음을 쫓는 데 도움을 줍니다. 간단하게 즐길 수 있어 밤늦게 부담 없이 먹기 좋은 디저트입니다.'
    },
    { 
        name: '마른안주', 
        image: 'assets/snacks/dried-snacks.svg', 
        description: '영화나 드라마 볼 때 빠질 수 없는 단짝. 짭짤하고 고소한 마른안주와 함께 즐거운 시간을.',
        long_description: '마른안주는 육포, 오징어, 쥐포, 땅콩, 김 등 건조된 식재료를 활용한 간편한 안주입니다. 짭짤하고 고소한 맛, 그리고 씹는 즐거움이 있어 술안주나 간식으로 인기가 많습니다. 특히 영화나 드라마를 감상할 때 입이 심심하지 않게 해주는 최고의 동반자입니다.',
        origin: '마른안주는 식재료를 보존하기 위한 건조 기술과 함께 인류 역사와 함께해 왔습니다. 한국에서는 과거부터 어포, 육포 등을 술안주나 비상식량으로 즐겨왔으며, 현대에는 다양한 종류의 건어물과 견과류를 활용한 마른안주가 개발되었습니다.',
        pairings: '맥주, 소주, 땅콩, 견과류, 마요네즈, 고추장',
        why_late_night: '간편하게 즐길 수 있고, 씹는 즐거움이 있어 밤늦게까지 영화나 게임을 즐길 때 좋습니다. 짭짤한 맛은 음료와 함께 더욱 입맛을 돋웁니다.'
    },
    { 
        name: '과일', 
        image: 'assets/snacks/fruit.svg', 
        description: '상큼하고 달콤한 과일로 비타민 충전! 부담 없는 건강한 야식을 원한다면.',
        long_description: '과일은 비타민, 미네랄, 식이섬유가 풍부하여 건강에 좋은 자연의 선물입니다. 달콤하고 상큼한 맛은 밤늦게 출출할 때 가볍게 즐기기 좋으며, 소화 부담이 적어 몸에 좋습니다. 다양한 종류의 과일을 섭취하여 영양 균형을 맞출 수 있습니다.',
        origin: '인류는 수렵 채집 시대부터 야생 과일을 섭취해 왔으며, 농업의 발달과 함께 다양한 과일들이 재배되기 시작했습니다. 각 지역의 기후와 토양에 따라 특색 있는 과일들이 발전했으며, 현대에는 전 세계의 다양한 과일을 언제든지 즐길 수 있게 되었습니다.',
        pairings: '요거트, 견과류, 치즈, 꿀, 와인, 탄산수',
        why_late_night: '가볍고 상큼하여 밤늦게 먹어도 소화 부담이 적습니다. 비타민과 수분 보충에 좋고, 자연의 단맛으로 건강하게 허기를 달랠 수 있습니다.'
    },
    { 
        name: '햄버거', 
        image: 'assets/snacks/burger.svg', 
        description: '두툼한 패티와 신선한 야채, 그리고 고소한 빵의 완벽한 삼위일체! 출출할 땐 역시 햄버거.',
        long_description: '햄버거는 분쇄한 고기로 만든 패티를 빵 사이에 끼워 채소, 치즈, 소스 등과 함께 먹는 서양식 샌드위치입니다. 간편하게 먹을 수 있으면서도 든든함을 주어 바쁜 현대인들에게 사랑받는 메뉴입니다. 다양한 프랜차이즈와 수제 버거 전문점에서 개성 있는 햄버거를 즐길 수 있습니다.',
        origin: '햄버거의 기원은 몽골 제국의 타타르족이 날고기를 다져 먹던 것에서 찾을 수 있습니다. 이후 독일 함부르크를 거쳐 미국으로 전파되면서 현재와 같은 형태로 발전했습니다. 20세기 초 패스트푸드의 등장과 함께 전 세계적으로 대중화되었습니다.',
        pairings: '감자튀김, 콜라, 사이다, 맥주, 어니언링, 밀크셰이크',
        why_late_night: '밤늦게 허기질 때 든든하게 한 끼를 해결해 줄 수 있는 간편하고 맛있는 야식입니다. 다양한 재료가 조화로운 맛을 선사합니다.'
    },
    { 
        name: '만두', 
        image: 'assets/snacks/mandu.svg', 
        description: '육즙 가득! 찐만두, 군만두, 물만두... 어떻게 먹어도 맛있는 만두의 무한 매력.',
        long_description: '만두는 밀가루 피에 고기, 채소 등을 넣어 만든 소를 싸서 찌거나 굽거나 삶아 먹는 음식입니다. 한국, 중국, 일본 등 동아시아 여러 나라에서 다양한 형태로 발전했으며, 속재료와 조리법에 따라 무궁무진한 맛을 즐길 수 있습니다. 간단하면서도 든든하여 야식으로 인기가 많습니다.',
        origin: '만두의 기원은 중국 삼국시대 제갈량이 만들었다는 설이 가장 유명합니다. 이후 비단길을 통해 서역으로 전파되었고, 고려 시대에 한국에 도입되어 한국인의 식문화에 깊숙이 자리 잡았습니다. 지역별로 만두의 크기, 모양, 속재료에 차이가 있습니다.',
        pairings: '간장, 식초, 고춧가루, 단무지, 라면, 떡볶이',
        why_late_night: '간편하게 조리할 수 있고, 든든함을 주어 밤늦게 허기질 때 좋습니다. 특히 따뜻한 국물에 넣은 만둣국은 속을 편안하게 해줍니다.'
    },
    { 
        name: '나노바나나', 
        image: 'assets/snacks/nano-banana.svg', 
        description: '미래에서 온 궁극의 달콤함! 나노 기술로 더욱 진해진 바나나의 풍미를 느껴보세요.',
        long_description: '나노바나나는 첨단 나노 기술을 통해 바나나의 맛과 영양을 극대화한 미래형 야식입니다. 일반 바나나보다 훨씬 달콤하고 부드러운 식감을 자랑하며, 미세한 입자로 이루어져 소화 흡수율이 뛰어납니다. 피로 회복과 에너지 보충에 탁월하여 밤샘 작업이 많은 분들에게 특히 추천합니다.',
        origin: '2042년, 한국의 '퓨처푸드 연구소'에서 개발된 혁신적인 과일입니다. 인공지능과 생명공학 기술의 융합으로 탄생했으며, 초기에는 우주 비행사들의 비상식량으로 개발되었으나, 뛰어난 맛과 영양으로 인해 민간에 보급되었습니다.',
        pairings: '나노우유, 사이버 초콜릿, 가상현실 커피',
        why_late_night: '나노 기술로 압축된 영양과 에너지는 밤늦게까지 활동하는 현대인에게 최고의 활력을 선사합니다. 달콤하고 부드러워 부담 없이 즐길 수 있습니다.'
    },
    { 
        name: '콘푸르스트', 
        image: 'assets/snacks/corn-frost.svg', 
        description: '밤새 과제할 때, 출출함을 달래주는 든든한 친구. 우유와 함께라면 더욱 꿀맛!',
        long_description: '콘푸르스트는 바삭한 옥수수 플레이크에 달콤한 설탕 코팅이 더해진 시리얼입니다. 우유와 함께 간편하게 섭취할 수 있어 아침 식사 대용은 물론, 밤늦게 출출할 때 즐겨 찾는 야식으로도 인기가 많습니다. 고소하고 달콤한 맛과 바삭한 식감은 먹는 즐거움을 더해줍니다.',
        origin: '콘푸르스트(Frosted Flakes)는 1952년 미국의 켈로그(Kellogg\'s)사에서 출시한 시리얼입니다. 원래는 건강식으로 개발된 콘플레이크에 설탕 코팅을 더하여 맛을 강화했으며, 이후 전 세계적으로 가장 인기 있는 시리얼 중 하나가 되었습니다.',
        pairings: '우유, 요거트, 과일, 견과류',
        why_late_night: '간편하게 준비할 수 있어 밤늦게 출출할 때 부담 없이 즐기기 좋습니다. 우유와 함께 섭취하면 단백질과 탄수화물을 동시에 보충할 수 있어 든든함을 줍니다.'
    }
];

const generateBtn = document.getElementById('generate-btn');
const recommendationCard = document.getElementById('recommendation-card');
const fallbackImage =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(
        "<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>" +
        "<defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>" +
        "<stop offset='0' stop-color='#2b2d42'/><stop offset='1' stop-color='#8d99ae'/>" +
        "</linearGradient></defs>" +
        "<rect width='1200' height='800' fill='url(#g)'/>" +
        "<rect x='80' y='80' width='1040' height='640' rx='32' fill='rgba(0,0,0,0.35)'/>" +
        "<text x='600' y='410' font-family='Noto Sans KR, Arial, sans-serif' font-size='42' fill='#ffffff' text-anchor='middle'>" +
        "Image not available" +
        "</text></svg>"
    );

function renderSnack(snack) {
    recommendationCard.style.animation = 'flip-in 0.6s ease-out forwards';
    recommendationCard.innerHTML = `
        <img src="${snack.image}" alt="${snack.name}" loading="lazy" decoding="async">
        <div class="snack-info">
            <div class="snack-name">${snack.name}</div>
            <p class="snack-description">${snack.description}</p>
            <div class="snack-details">
                <h3>왜 야식으로 좋을까요?</h3>
                <p>${snack.why_late_night}</p>
                <h3>기원 및 특징</h3>
                <p>${snack.origin}</p>
                <h3>환상의 짝꿍</h3>
                <p>${snack.pairings}</p>
            </div>
        </div>
    `;

    const img = recommendationCard.querySelector('img');
    img.addEventListener('error', () => {
        img.src = fallbackImage;
    }, { once: true });
}

generateBtn.addEventListener('click', () => {
    // Clear previous result and animation
    recommendationCard.innerHTML = '';
    recommendationCard.style.animation = 'none';
    
    // Trigger reflow to restart animation
    void recommendationCard.offsetWidth;

    // Get a random snack
    const randomIndex = Math.floor(Math.random() * snacks.length);
    const selectedSnack = snacks[randomIndex];

    // Set new animation and content
    renderSnack(selectedSnack);
});

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.removeItem('theme');
        themeToggle.textContent = '🌙';
    }
});

// Apply saved theme on load
(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.textContent = '☀️';
    }
})();
