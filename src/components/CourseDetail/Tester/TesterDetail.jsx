import './tester.scss';
import { Data } from './DataTester.jsx';
import { Footer } from '../../Home/Footer';
import { WhyChoseMe } from '../UtilData/WhyChoseMe';
export const TesterDetail = () => {
  return (
    <>
      <img className="banners" src={Data.imgBanners} alt="Img-banners" />
      <section className="box-1-data-tester">
        <div className="row-1">
          <div className="row-1-left">
            <div className="content">
              <h1>Giới thiệu chung</h1>
              <div>{Data.introduction}</div>
              <div className="btn">
                <a href="#courseDetail" id="btn-courseDetail">
                  Khung chương trình{' '}
                </a>
              </div>
            </div>
          </div>
          <div className="row-1-right">
            <img src={Data.imgIntroduction} />
          </div>
        </div>
      </section>
      <section className="box-2-data-tester">
        <div className="row-2">
          <div className="row-2-left">
            <div className="content">
              <h1>Đối tượng tham gia</h1>
              <ul>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.participants1}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.participants2}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.participants3}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-2-right">
            <div className="content">
              <h1>Học xong làm ở đâu</h1>
              <ul>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.wheredowork1}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  <p>{Data.wheredowork2}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork3}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork4}</p>
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork5}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="box-3-data-tester">
        <div>
          <WhyChoseMe />
        </div>
      </section>
      <section className="box-4-data-tester">
        <div className="row-4">
          <div className="row-4-left">
            <img src={Data.imgBox4} alt="Image-box-4" />
          </div>
          <div className="row-4-right">
            <h1>Giá trị nhận được sau khóa học</h1>
            <div>
              <ul>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row1}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row2}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row3}
                </li>
                <li>
                  {' '}
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row4}
                </li>
              </ul>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
      <section id="courseDetail" className="box-5-data-tester">
        <h1 id="box-5-title">Khung chương trình</h1>
        {/* MODULE 1 */}
        <div>
          <div className="node">Module 1</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-1">
            <div className="left">
              <p className="module-title">{Data.module1_title}</p>
              <div className="day"> {Data.day1}</div>
              <ul>
                <li>{Data.module1_row1}</li>
                <li>{Data.module1_row2}</li>
                <li>{Data.module1_row3}</li>
                <li>{Data.module1_row4}</li>
                <li>{Data.module1_row5}</li>
                <li>{Data.module1_row6}</li>
              </ul>
              <div className="day"> {Data.day2}</div>
              <ul>
                <li>{Data.module1_row7}</li>
                <li>{Data.module1_row8}</li>
                <li>{Data.module1_row9}</li>
                <li>{Data.module1_row10}</li>
                <li>{Data.module1_row11}</li>
                <li>{Data.module1_row12}</li>
                <li>{Data.module1_row13}</li>
              </ul>
              <div className="day"> {Data.day3}</div>
              <ul>
                <li>{Data.module1_row14}</li>
                <li>{Data.module1_row15}</li>
                <li>{Data.module1_row16}</li>
                <li>{Data.module1_row17}</li>
                <li>{Data.module1_row18}</li>
                <li>{Data.module1_row19}</li>
                <li>{Data.module1_row20}</li>
              </ul>
              <div className="day"> {Data.day4}</div>
              <ul>
                <li>{Data.module1_row21}</li>
                <li>{Data.module1_row22}</li>
                <li>{Data.module1_row23}</li>
                <li>{Data.module1_row24}</li>
                <li>{Data.module1_row25}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module1_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 2 */}
        <div>
          <div className="node">Module 2</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-2">
            <div className="left">
              <img src={Data.module2_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module2_title}</p>
              <div className="day"> {Data.day5}</div>
              <ul>
                <li>{Data.module2_row1}</li>
                <li>{Data.module2_row2}</li>
                <li>{Data.module2_row3}</li>
                <li>{Data.module2_row4}</li>
                <li>{Data.module2_row5}</li>
              </ul>
              <div className="day"> {Data.day6}</div>
              <ul>
                <li>{Data.module2_row6}</li>
                <li>{Data.module2_row7}</li>
                <li>{Data.module2_row8}</li>
                <li>{Data.module2_row9}</li>
                <li>{Data.module2_row10}</li>
              </ul>
              <div className="day"> {Data.day7}</div>
              <ul>
                <li>{Data.module2_row11}</li>
                <li>{Data.module2_row12}</li>
                <li>{Data.module2_row13}</li>
                <li>{Data.module2_row14}</li>
                <li>{Data.module2_row15}</li>
              </ul>
              <div className="day"> {Data.day8}</div>
              <ul>
                <li>{Data.module2_row16}</li>
                <li>{Data.module2_row17}</li>
                <li>{Data.module2_row18}</li>
                <li>{Data.module2_row19}</li>
              </ul>
              <div className="day"> {Data.day9}</div>
              <ul>
                <li>{Data.module2_row20}</li>
                <li>{Data.module2_row21}</li>
                <li>{Data.module2_row22}</li>
                <li>{Data.module2_row23}</li>
                <li>{Data.module2_row24}</li>
              </ul>
              <div className="day"> {Data.day10}</div>
              <ul>
                <li>{Data.module2_row25}</li>
                <li>{Data.module2_row26}</li>
                <li>{Data.module2_row27}</li>
                <li>{Data.module2_row28}</li>
              </ul>
              <div className="day"> {Data.day11}</div>
              <ul>
                <li>{Data.module2_row29}</li>
                <li>{Data.module2_row30}</li>
                <li>{Data.module2_row31}</li>
                <li>{Data.module2_row32}</li>
              </ul>
              <div className="day"> {Data.day12}</div>
              <ul>
                <li>{Data.module2_row33}</li>
                <li>{Data.module2_row34}</li>
                <li>{Data.module2_row35}</li>
                <li>{Data.module2_row36}</li>
              </ul>
              <div className="day"> {Data.day13}</div>
              <ul>
                <li>{Data.module2_row37}</li>
                <li>{Data.module2_row38}</li>
                <li>{Data.module2_row39}</li>
                <li>{Data.module2_row40}</li>
              </ul>
              <div className="day"> {Data.day14}</div>
              <ul>
                <li>{Data.module2_row41}</li>
                <li>{Data.module2_row42}</li>
                <li>{Data.module2_row43}</li>
                <li>{Data.module2_row44}</li>
                <li>{Data.module2_row45}</li>
              </ul>
              <div className="day"> {Data.day15}</div>
              <ul>
                <li>{Data.module2_row46}</li>
                <li>{Data.module2_row47}</li>
                <li>{Data.module2_row48}</li>
                <li>{Data.module2_row49}</li>
                <li>{Data.module2_row50}</li>
              </ul>
              <div className="day"> {Data.day16}</div>
              <ul>
                <li>{Data.module2_row51}</li>
                <li>{Data.module2_row52}</li>
                <li>{Data.module2_row53}</li>
              </ul>
              <div className="day"> {Data.day17}</div>
              <ul>
                <li>{Data.module2_row54}</li>
                <li>{Data.module2_row55}</li>
              </ul>
              <div className="day"> {Data.day18}</div>
              <ul>
                <li>{Data.module2_row56}</li>
                <li>{Data.module2_row57}</li>
                <li>{Data.module2_row58}</li>
                <li>{Data.module2_row59}</li>
                <li>{Data.module2_row60}</li>
              </ul>
              <div className="day"> {Data.day19}</div>
              <ul>
                <li>{Data.module2_row61}</li>
                <li>{Data.module2_row62}</li>
              </ul>
              <div className="day"> {Data.day20}</div>
              <ul>
                <li>{Data.module2_row63}</li>
                <li>{Data.module2_row64}</li>
                <li>{Data.module2_row65}</li>
                <li>{Data.module2_row66}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 3 */}
        <div>
          <div className="node">Module 3</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-3">
            <div className="left">
              <p className="module-title">{Data.module3_title}</p>
              <div className="day"> {Data.day21}</div>
              <ul>
                <li>{Data.module3_row1}</li>
                <li>{Data.module3_row2}</li>
                <li>{Data.module3_row3}</li>
              </ul>
              <div className="day"> {Data.day22}</div>
              <ul>
                <li>{Data.module3_row4}</li>
                <li>{Data.module3_row5}</li>
              </ul>
              <div className="day"> {Data.day23}</div>
              <ul>
                <li>{Data.module3_row6}</li>
                <li>{Data.module3_row7}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module3_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 4 */}
        <div>
          <div className="node">Module 4</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-4">
            <div className="left">
              <img src={Data.module4_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module4_title}</p>
              <div className="day"> {Data.day24}</div>
              <ul>
                <li>{Data.module4_row1}</li>
                <li>{Data.module4_row2}</li>
                <li>{Data.module4_row3}</li>
              </ul>
              <div className="day"> {Data.day25}</div>
              <ul>
                <li>{Data.module4_row4}</li>
                <li>{Data.module4_row5}</li>
                <li>{Data.module4_row6}</li>
              </ul>
              <div className="day"> {Data.day26}</div>
              <ul>
                <li>{Data.module4_row7}</li>
                <li>{Data.module4_row8}</li>
                <li>{Data.module4_row9}</li>
              </ul>
              <div className="day"> {Data.day27}</div>
              <ul>
                <li>{Data.module4_row10}</li>
                <li>{Data.module4_row11}</li>
                <li>{Data.module4_row12}</li>
                <li>{Data.module4_row13}</li>
              </ul>
              <div className="day"> {Data.day28}</div>
              <ul>
                <li>{Data.module4_row14}</li>
                <li>{Data.module4_row15}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 5 */}
        <div>
          <div className="node">Module 5</div>
        </div>
        <div className="content-box-5">
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-5">
            <div className="left">
              <p className="module-title">{Data.module5_title}</p>
              <div className="day"> {Data.day29}</div>
              <ul>
                <li>{Data.module5_row1}</li>
                <li>{Data.module5_row2}</li>
              </ul>
              <div className="day"> {Data.day30}</div>
              <ul>
                <li>{Data.module5_row3}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module5_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
