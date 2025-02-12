import { useParams } from "react-router-dom";
import { CharacterListContainer, Content, EpisodeContainer } from "./style";
import PageTitle from "../../components/ui/atoms/PageTitle";
import TitleLaneComponent from "../../components/ui/atoms/TitleLaneComponent";
import CharacterCard from "../../components/ui/modules/ChracterCard";
import { genderData } from "../../modules/gender";
import DOMPurify from 'dompurify';

const EpisodeDetailPage = () => {

  const { episodeId } = useParams();

  const characterList = [
    { id: 1, titleName: `하비엘`, occupation: '판타지', gender: 0, },
    { id: 2, titleName: `지크 아르덴`, occupation: '판타지', gender: 0, },
    { id: 3, titleName: `실비아 드 프란체르`, occupation: '판타지', gender: 1, },
    { id: 4, titleName: '마리네', occupation: '판타지', gender: 1, },
    { id: 5, titleName: '조니악 키르딘', occupation: '판타지', gender: 0, },
    { id: 6, titleName: '아펠리오 드 프란체르', occupation: '판타지', gender: 0, },
  ];

  const parser = new DOMParser();
  const contentText = `
    <h2><strong>리눅스(Linux)란?</strong></h2><p><br></p><p>리눅스(Linux)는 오픈 소스 운영 체제(OS) 중 하나로, 컴퓨터 하드웨어와 소프트웨어 리소스를 관리하고 사용자와 프로그램 간의 인터페이스를 제공합니다. 리눅스는 프로그램 개발, 웹 서버, 데이터베이스 서버 등의 다양한 용도로 사용되며, 안정성, 보안성, 유연성 등의 장점을 가지고 있습니다.</p><p><br></p><p>리눅스는 UNIX 운영 체제에서 영향을 받아 개발된 운영 체제입니다. 리눅스느 UNIX와 유사한 명령어와 파일 시스템을 사용하며, 다중 사용자 및 다중 작업 환경을 지원합니다. 또한, 소스 코드 공개 및 수정이 자유롭기 때문에 개발자들에게 인기가 높습니다.</p><p><br></p><p>리눅스는 다양한 배포판(Distribution)으로 제공되며, 대표적으로 Ubuntu, CentOS, Debian, Fedora 등이 있습니다. 서버에 사용되는 경우에는 CentOS나 Debian 등이 많이 사용됩니다.</p><p>저 같은 경우에는 개인용 컴퓨터에 흔히 사용되는 Ubuntu를 이용한 백엔드 서버 배포 경험이 있습니다.</p><p><br></p><p><br></p><p><br></p><h3><strong>리눅스의 특징</strong></h3><p><br></p><p>리눅스(Linux)의 주요 특징은 다음과 같습니다.</p><p><br></p><ol><li><strong>오픈 소스:</strong> 리눅스는 오픈 소스 운영 체제로, 소스 코드를 누구나 자유롭게 볼 수 있고 수정할 수 있습니다. 이는 커뮤니티 기반의 개발과 유지 보수를 가능케 하며, 보안과 안정성이 높은 운영 체제를 만드는 데 큰 기여를 합니다.</li><li><strong>멀티 유저, 멀티태스킹:</strong> 리눅스는 다중 사용자 및 다중 작업 환경을 지원합니다. 여러 사용자가 동시에 컴퓨터를 사용할 수 있고, 하나의 컴퓨터에서 여러 작업을 동시에 처리할 수 있습니다.</li><li><strong>안정성:</strong> 리눅스는 운영 체제의 안정성이 높습니다. 시스템 충돌, 프로그램 충돌, 바이러스 등의 문제를 예방 하고 대처할 수 있는 구조를 가지고 있습니다.</li><li><strong>보안성:</strong> 리눅스는 보안성이 높은 운영 체제입니다. 사용자 계정 분리, 파일 권한 설정, 방화벽 등의 기능을 통해 해킹 등의 공격으로부터 시스템을 보호합니다.</li><li><strong>다양한 배포판:</strong> 리눅스는 다양한 배포판으로 제공됩니다. 이러한 배포판들은 서버, 개인용 컴퓨터, 모바일 기기 등 다양한 용도에 맞게 사용할 수 있습니다.</li><li><strong>유연성:</strong> 리눅스는 유연성이 높습니다. 사용자가 필요한 기능이나 프로그램을 추가하거나 수정하여 사용할 수 있습니다.</li><li><strong>무료:</strong> 리눅스는 무료로 사용할 수 있습니다. 따라서 비용 부담 없이 운영 체제를 사용할 수 있으며, 개발 및 시스템 유지 보수 비용을 절감할 수 있습니다.</li></ol><p><br></p><p><br></p><p><br></p><h3><strong>리눅스 커널이란?</strong></h3><p><br></p><p>리눅스 커널은 리눅스 운영 체제의 핵심 부분으로, 운영 체제의 기본 기능을 제공합니다. 이는 운영 체제의 핵심적인 부분으로서 하드웨어를 제어하고 응용 프로그램과의 상호 작용을 관리하는 역할을 합니다.</p><p><br></p><p>커널은 운영 체제의 여러 부분 중에서도 가장 핵심적인 역할을 수행하기 때문에, 운영 체제의 안정성, 보안성, 성능 등의 요소에 큰 영향을 미칩니다.</p><p><br></p><p>리눅스 커널은 모놀리딕 커널(monolithic kernel) 아키텍처를 채택하고 있습니다. 이는 커널 내부의 여러 기능이 모두 한 곳에서 실행되는 것을 의미합니다. 이러한 모놀리딕 커널은 실행 속도가 빠르고 성능이 우수하지만, 커널 자체의 크기가 크기 때문에 확장성이 제한적일 수 있습니다.</p><p>리눅스 커널은 오픈 소스로 개발되어 있어, 누구나 소스 코드를 볼 수 있고 수정할 수 있습니다. 이로 인해 다양한 사용자들의 요구 사항에 맞춰 커널을 발전시킬 수 있습니다. 더불어, 리눅스 커널은 다양한 하드웨어 아키텍처를 지원하고 있어, 다양한 기기에서 사용될 수 있습니다.</p>
  `;
  const decodedString = parser.parseFromString(contentText, 'text/html').documentElement.innerHTML!;
  const contentHtml = DOMPurify.sanitize(decodedString);
  

  return (
    <EpisodeContainer>
      <PageTitle
        title={`Episode ${episodeId}) 광기 어린 아이들`}
        sub={`신비아이 • 이승재`}
        edit={`/episodes/upload?episode=${episodeId}`}
        onRemove={() => {}}
        list={`/stories`}
        isLogin />
      <TitleLaneComponent
        title='에피소드 등장인물들'
        unPadding />
      <CharacterListContainer>
        {(characterList)
          && characterList?.map((item: any, index: number) =>
            <CharacterCard
              key={index}
              characterName={item?.titleName}
              image={genderData[item?.gender].image}
              href={`/characters/detail/${item?.id}`} />)}
      </CharacterListContainer>
      <Content dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </EpisodeContainer>
  )
};

export default EpisodeDetailPage;