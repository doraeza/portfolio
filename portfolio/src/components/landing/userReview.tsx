import useUserInfo from '../../hooks/useUserInfo'
import { userInteface } from '../../interface/ApiListData'
import TopButton from '../common/topButton'
const UserReview = ({ApiData1,ApiData2,ApiData3}:{ApiData1:userInteface,ApiData2:userInteface,ApiData3:userInteface}) => {
const a = ({ApiData1}:{ApiData1:userInteface}) => {}
    return (
        <section className="bg-bg-default">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">써본 사람들은 알고있어요!</h2>
              <p className="text-xl text-gray-400">메이크-릴레이션을 즐기는 메릴이들의 리뷰를 확인하세요!</p>
            </div>
  
            {/* Testimonials */}
            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
  
              {/* 1st testimonial */}
              <div className="flex flex-col h-full p-6 bg-card-post" data-aos="fade-up">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <img className="rounded-full" src={ApiData1.picture.thumbnail&& ApiData1.picture.thumbnail} width="48" height="48" alt="Testimonial 01" />
                      <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                          </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-700 not-italic">{ApiData1.name.first}&nbsp;{ApiData1.name.last}</cite><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
                  </div>
                </div>
  
                {/* 2nd testimonial */}
                <div className="flex flex-col h-full p-6 bg-card-post" data-aos="fade-up" data-aos-delay="200">
                  <div>
                    <div className="relative inline-flex flex-col mb-4">
                      <img className="rounded-full" src={ApiData2.picture.thumbnail && ApiData2.picture.thumbnail} width="48" height="48" alt="Testimonial 02" />
                        <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        </svg>
                          </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-700 not-italic">{ApiData2.name.first}&nbsp;{ApiData2.name.last}</cite><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
                    </div>
                  </div>
  
                  {/* 3rd testimonial */}
                  <div className="flex flex-col h-full p-6 bg-card-post" data-aos="fade-up" data-aos-delay="400">
                    <div>
                      <div className="relative inline-flex flex-col mb-4">
                        <img className="rounded-full" src={ApiData3.picture.thumbnail && ApiData3.picture.thumbnail} width="48" height="48" alt="Testimonial 03" />
                          <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                          </svg>
                          </div>
                      </div>
                      <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
                      <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                        <cite className="text-gray-700 not-italic">{ApiData3.name.first}&nbsp;{ApiData3.name.last}</cite><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0"></a>
                      </div>
                    </div>
  
                  </div>
  
                </div>
              </div>
  </section>
    )
}
export default UserReview