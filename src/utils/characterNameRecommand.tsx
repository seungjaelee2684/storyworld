import { genderData } from "../modules/gender";

export const handleCharacterNameRecommand = async (data: any) => {
  const apiKey = import.meta.env.VITE_OPEN_AI_KEY;

  if (!apiKey) {
    alert('연결되지 않았습니다.');
    return;
  };

  if (!data) {
    alert(`정보가 부족합니다.\n입력 정보를 전부 입력 완료한 후 다시 시도해주세요.`);
    return;
  }

  const { age, gender, occupation, trait, trait_content, background, name_style } = data;

  const prompt = `
    너는 인물 이름 추천 AI야.
    사용자 입력을 기반으로 적절한 이름과 성을 10가지 추천해줘.

    성별: ${genderData[gender].ko}
    성격 태그: ${trait}
    성격: ${trait_content}
    직업: ${occupation}
    나이: ${age}
    배경 이야기: ${background}
    이름 스타일: ${name_style}식

    추천할 이름 (10가지 이름을 한글 문자열 리스트만):
  `;

  return prompt;

  // const response = await fetch("https://api.openai.com/v1/completions", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${apiKey}`,
  //   },
  //   body: JSON.stringify({
  //     model: "gpt-3.5-turbo",
  //     prompt,
  //     max_tokens: 50,
  //     temperature: 0.7,
  //   }),
  // });

  // const data = await response.json();
  // setGeneratedName(data.choices[0]?.text.trim() || "이름을 생성할 수 없습니다.");
};