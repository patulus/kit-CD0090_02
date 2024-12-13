import './App.css'
import Game from './Game.js'

const App = () => {
  const gamesEnjoyingStory = [
    {
      id: 1,
      title: "DAVE THE DIVER",
      genre: "Action Adventure",
      description: `수많은 어종과 거대 생물이 가득한 아름다운 바닷속 언제 어디서 나타날 지 모르는 해양 생물들이 궁금하지 않으신가요?
위협적인 생물의 습격을 피해 싱싱한 식재료를 획득하세요. 환상적인 해양 생태계와 신비한 고대 유물. 바닷속은 수수께끼로 가득합니다.
직접 잡은 싱싱한 재료로 특별한 초밥을 만들어 판매해 보세요! 입소문이 나면 특별한 손님이 깜짝 방문할 수도 있어요.
초밥집을 운영해 자금을 모으면 더 깊은 곳을 탐사할 수 있습니다! 조심하세요! 이상 현상으로 발생한 거대 블루홀에는​ 미지의 생명체가 당신을 기다리고 있습니다.
언제나 장비를 충분히 강화해두세요.거대 생물에 맞서 자신을 지키는 데 큰 도움이 될 것입니다.`,
      developer: "MINTROCKET",
      price: 24000,
      rating: 5,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1868140/header.jpg",
    },
    {
      id: 2,
      title: "Coffee Talk",
      genre: "Visual Novel",
      description: `"Coffee Talk은 사람들의 고민을 들으며, 가지고 있는 재료를 사용해서 사람들의 마음을 어루만져줄 따뜻한 음료를 제공해주는 게임입니다.
이 게임이 보여주는 세계 속에는, 평범한 사람과는 다른 캐릭터들도 있습니다. 엘프와 서큐버스의 드라마틱한 사랑 이야기부터 인간을 이해하고자 시도하는 우주인 등…
뉴 시애틀에서 살아가는 다양한 이들의 이야기를 들어보면, 현대의 게이머들도 그들의 세계에 크게 공명할 것입니다.`,
      developer: "Toge Productions",
      price: 14500,
      rating: 5,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/914800/header.jpg",
    },
    {
      id: 3,
      title: "Detroit: Become Human",
      genre: "Action Adventure",
      description: `2038년 디트로이트. 기술은 인간을 닮은 안드로이드를 어디서든 볼 수 있는 지점까지 진화하였습니다. 인간처럼 말하고 움직이며 행동하지만, 그들은 오직 인간을 섬기는 기계일 뿐입니다.
세 명의 독특한 안드로이드로 플레이 하면서 혼란의 찰나에 있는 세상 - 아마도 우리의 미래일 -을 그들의 눈을 통해 바라보십시오. 여러분이 내리는 모든 결정은 게임의 치열하면서 많은 분기로 나뉘는 이야기의 향배를 극적으로 바꾸게 됩니다.
여러분은 도덕적인 딜레마에 마주하고 누굴 살릴지 죽일지를 결정하게 됩니다. 골라야 할 수 천개의 선택지와 십 수개의 가능한 엔딩에서, 여러분은 어떻게 디트로이트의 미래와 인류의 운명에 영향을 미치시겠습니까?`,
      developer: "Quantic Dream",
      price: 43000,
      rating: 5,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg",
    },
    {
      id: 4,
      title: "Life is Strange",
      genre: "Adventure",
      description: `Life is Strange is an award-winning and critically acclaimed episodic adventure game that allows the player to rewind time and affect the past, present and future.
Follow the story of Max Caulfield, a photography senior who discovers she can rewind time while saving her best friend Chloe Price.
The pair soon find themselves investigating the mysterious disappearance of fellow student Rachel Amber, uncovering a dark side to life in Arcadia Bay. Meanwhile, Max must quickly learn that changing the past can sometimes lead to a devastating future.`,
      developer: "DONTNOD Entertainment",
      price: 19500,
      rating: 5,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/319630/header.jpg",
    },
    {
      id: 5,
      title: "Assassin's Creed® Odyssey",
      genre: "Action RPG",
      description: `'어쌔신 크리드 오디세이'에서 당신의 운명을 선택하십시오.낙오자에서 살아있는 전설이 되기까지, 장대한 여정을 따라가며 당신의 과거에 숨겨진 비밀을 밝혀내고 고대 그리스의 운명을 바꾸어야 합니다.
눈 덮인 산꼭대기부터 에게해의 밑바닥까지, 그리스의 황금기 시절 도시와 야생 그대로의 환경을 탐험하십시오. 다양한 캐릭터를 만나고, 위험한 용병들과 전투를 벌이는 등 뜻밖의 만남이 여러분을 기다립니다.
여러분의 선택이 앞으로 펼쳐질 대장정을 결정합니다. 새로운 대화 시스템과 선택지를 통해 다양한 엔딩을 플레이해 보세요. 장비와 선박, 특수 능력을 원하는 대로 개조해 전설이 되어보세요.
수백 명의 병사가 참여한 아테네와 스파르타 사이의 대규모 전투에서 전사로서의 능력을 보여주거나, 에게해를 가로지르는 해전에서 모든 함대를 무찌르고 자신만의 길을 나아가세요.`,
      developer: "Ubisoft Quebec",
      price: 65000,
      rating: 4,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg",
    },
    {
      id: 6,
      title: "To the Moon",
      genre: "Mystery",
      description: `로잘린 박사와 와츠 박사는 특이한 직업을 가지고 있습니다: 사람들에게 다시 살아갈 기회를 주는 거죠. 가장 시작부터... 하지만 그 모든 과정은 오직 환자의 뇌 속에서만 벌어집니다.
수술의 위험성 때문에, 그 '새로운 삶'은 환자들이 숨을 거두기 전 마지막으로 갖는 기억이 됩니다. 그리하여 이 수술은 오직 죽기 직전의 환자들에게만 수행됩니다. 그들이 간절히 원했으나 끝내 이루지 못했던 꿈을 이뤄 주기 위하여.
이 특정한 이야기는 조니라는 이름을 가진 노인의 꿈을 이뤄주기 위한 박사들의 노력을 담고 있습니다. 조니의 기억 속 시간을 거슬러 한 발짝을 내딛을 때마다, 새로운 과거의 파편이 드러납니다.
박사들은 그의 일생 내내 이어진 복잡한 사건의 퍼즐을 맞추며, 어째서 노인의 마지막 소원이 그러한지를 밝혀내려 노력합니다.
그리고 조니의 최후의 소원은, 당연하게도... 달에 가는 것입니다.`,
      developer: "Freebird Games",
      price: 10800,
      rating: 5,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/206440/header.jpg",
    },
  ]

  const gamesEnjoyingAction = [
    {
      id: 1,
      title: "Red Dead Redemption 2",
      genre: "Action Adventure",
      description: `1899년, 미국. 보안관들이 얼마 안 남은 무법자 갱들을 사냥하면서 거친 서부 시대가 막을 내리고 있습니다.
항복하지 않은 무법자들은 모두 죽임을 당합니다. 서부 마을 블랙워터에서 강도 사건을 벌이다 크게 실패한 아서 모건과 반 더 린드 갱단은 도망칠 수밖에 없었습니다.
정부 요원과 일류 현상금 사냥꾼들에게 추격당하는 그들은 살아남기 위해 강도질과 도둑질, 싸움을 거듭하며 미국의 험난한 심장부를 달려나갑니다.
심해져 가는 내부 갈등으로 갱이 해체될 위기 속에서, 아서는 자기를 키워 준 갱에 대한 의리와 자신의 이상 중 하나를 선택해야만 합니다.`,
      developer: "Rockstar Games",
      price: 73000,
      rating: 4,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    },
    {
      id: 2,
      title: "ELDEN RING",
      genre: "Action RPG",
      description: `・자극으로 가득한 드넓은 세계
다채로운 시추에이션을 지닌 탁 트인 필드와 복잡하면서 입체적으로 짜인 거대한 던전이 경계선 없이 이어지는 드넓은 세계. 탐색 끝에는 미지의 것들을 발견했다는 기쁨과 높은 성취감으로 이어지는 압도적인 위협이 플레이어를 기다립니다.
・나만의 캐릭터
플레이어 캐릭터는 겉모습의 커스터마이즈뿐만 아니라 지니는 무기와 방어구, 마법을 자유롭게 조합할 수 있습니다. 근력을 높여 강인한 전사가 되거나 마술의 극치에 다다르는 등, 각자의 플레이 스타일에 맞춰 캐릭터를 성장시킬 수 있습니다.
・신화에서 태어나는 군상극
단편적으로 이야기되는 중층적인 구조의 이야기. 「틈새의 땅」을 무대로 등장인물들의 다양한 의도가 교착하는 군상극이 전개됩니다.
・다른 플레이어와 느슨하게 연결되는 독자적인 온라인 플레이
다른 플레이어와 직접적으로 연결되어 함께 여행하는 멀티플레이에 더해, 다른 플레이어의 존재를 느낄 수 있는 독자적인 비동기 온라인 요소도 지원합니다.`,
      developer: "FromSoftware, Inc.",
      price: 64800,
      rating: 5,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    },
    {
      id: 3,
      title: "Cyberpunk 2077",
      genre: "Action RPG",
      description: `사이버펑크 2077은 나이트 시티의 메갈로폴리스에서 펼쳐지는 오픈월드 액션 어드벤처 RPG입니다.
여러분은 사이버펑크 용병이 되어 생존을 위해 목숨을 걸고 싸워야 합니다. 개선 사항이 적용되고 새로운 무료 콘텐츠가 추가된 어두운 미래에서, 임무를 완수하여 평판을 쌓고 업그레이드를 잠금 해제하여 나만의 캐릭터와 플레이 스타일을 만들어 보세요.
여러분이 만들어나가는 관계와 선택에 따라, 여러분을 둘러싼 세계가 변화할 것입니다. 나이트 시티는 전설이 태어나는 곳입니다. 여러분은 어떤 전설을 써 내려가시겠습니까?`,
      developer: "CD PROJEKT RED",
      price: 66000,
      rating: 4,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header_koreana.jpg",
    },
  ]

  const gamesWithTogether = [
    {
      id: 1,
      title: "PICO PARK 2",
      genre: "Puzzle",
      description: `PICO PARK 2는 협력이 핵심인 2D 액션 퍼즐 게임입니다! 이번에는 이전 게임보다 더 많은 스테이지로 돌아왔습니다!
이전 버전과 마찬가지로 이 게임은 2명에서 8명까지의 플레이어가 로컬 또는 온라인으로 플레이할 수 있습니다. 모든 스테이지는 플레이어 수에 관계없이 플레이할 수 있으므로 친구들과 함께 플레이하세요!
온라인 플레이는 크로스 플랫폼 지원 기능도 있어 어떤 플랫폼으로든 친구와 함께 플레이할 수 있습니다! 또한, 하나의 컴퓨터로 최대 7명의 플레이어가 온라인에 참여할 수 있습니다.
월드, 무한, 배틀 모드와 함께 약간 불공평하면서 다소 어려운 다크 모드가 추가되었습니다! 완전히 새로운 PICO PARK 2의 세계 속으로 점프하고, 계략을 꾸미고, 뛰어들어 보세요!`,
      developer: "TECOPARK",
      price: 7920,
      rating: 5,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2644470/header.jpg",
    },
    {
      id: 2,
      title: "Overcooked! 2",
      genre: "Co-op",
      description: `Overcooked 2를 사전 주문해서 폭풍처럼 요리할 수 있는 5명의 추가 셰프를 받으세요.
혼란스러운 요리 액션으로 가득한 Overcooked가 돌아왔습니다! 양파 왕국으로 돌아가는 여행을 떠나세요. 클래식 협동 또는 온라인 플레이에서 셰프 팀을 만들어서 최대 4명까지 플레이하세요. 앞치마를 준비하세요... 다시 세상을 구할 때가 되었습니다!
뜨거운 후라이팬에서 탈출했더니, 오븐 속이었네요.
세상을 구했지만, 다시 새로운 위협이 나타났습니다. 주방으로 돌아가서 워킹 브레드의 굶주림을 끝장내세요!`,
      developer: "Ghost Town Games Ltd.",
      price: 26000,
      rating: 4,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/728880/header.jpg",
    },
    {
      id: 3,
      title: "Pummel Party",
      genre: "Casual",
      description: `Pummel Party는 4~8명의 플레이어가 온라인 및 로컬로 플레이하는 멀티 플레이어 파티 게임입니다. 보드 모드에서 여러 터무니없는 아이템을 사용해 친구나 인공지능을 쳐부수고 독특한 미니 게임 컬렉션에서 우정 파괴 대전을 펼치세요.
원하는 방식으로 플레이하세요. Pummel Party는 1~8명의 플레이어가 온라인이나 로컬로 같은 화면에서 대결할 수 있습니다. 온라인이든 개인 모드이든 우정을 파괴하는 재미가 넘칩니다.`,
      developer: "Rebuilt Games",
      price: 16500,
      rating: 4,
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/880940/header.jpg",
    },
  ]

  return (
    <>
      <Header />
      <Gamelist title="이야기를 즐기는 게임" list={gamesEnjoyingStory} />
      <Gamelist title="타격감이 뛰어난 게임" list={gamesEnjoyingAction} />
      <Gamelist title="여럿이 즐거운 게임" list={gamesWithTogether} />
    </>
  )
}

const Header = () => (
  <h1>추천하는 게임</h1>
)

const Gamelist = (props) => {
  return (
    <div className="games">
      <h2>{props.title}</h2>
      <div className="container">
        {
          props.list.map(game => (
              <Game key={game.id} game={game} />
            )
          )
        }
      </div>
    </div>
  )
}

export default App