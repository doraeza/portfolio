const Block = () => {
    return (
    <section className="bg-bg-default">
      <div className=" mx-auto px-4 sm:px-6 transition width">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">고객이 아닌 소중한 가족처럼 서비스를 제공하고 있어요!</h2>
            <p className="text-xl text-gray-400">메이크-릴레이션의 특징</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-card-post" width="64" height="64" rx="32" />
              </svg>
              <h4 className="h4 mb-2">비슷한 취향찾기</h4>
              <p className="text-lg text-gray-400 text-center">취향이 비슷한 만남을 가지고 싶으신 분들을 위해 취미,특기 필터를 이용할 수 있어요!</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-card-post" cx="32" cy="32" r="32" />
                
              </svg>
              <h4 className="h4 mb-2">큐 방식의 매칭</h4>
              <p className="text-lg text-gray-400 text-center">봇이 아닌 사람과 실시간으로 대화해보세요!</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-card-post" width="64" height="64" rx="32" />
                
              </svg>
              <h4 className="h4 mb-2">나의 옷장</h4>
              <p className="text-lg text-gray-400 text-center">내가 꾸미는 방식을 보여주고, 룩북으로 만들어서 게시할수잇어요!</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-card-post" width="64" height="64" rx="32" />
                
              </svg>
              <h4 className="h4 mb-2">파도타기</h4>
              <p className="text-lg text-gray-400 text-center">새로 사귄 친구에게 다른 친구를 소개받을 수 있어요!</p>
            </div>
            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-card-post" width="64" height="64" rx="32" />
                
              </svg>
              <h4 className="h4 mb-2">파티</h4>
              <p className="text-lg text-gray-400 text-center">다같이 즐길수 있는 파티 섹션을 이용할 수 있어요!</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-card-post" width="64" height="64" rx="32" />
                
              </svg>
              <h4 className="h4 mb-2">저렴한 가격</h4>
              <p className="text-lg text-gray-400 text-center">다른 소개팅 어플처럼 비싼 가격이 아닌 5천원 이하의 월정액으로 더 편하게 이용하세요!</p>
            </div>

          </div>

        </div>
      </div>
    </section>
    )
}
export default Block