import './baDetail.scss';
import { Data } from './DataBA.jsx';
import { Footer } from '../../Home/Footer';
import { WhyChoseMe } from '../UtilData/WhyChoseMe';
export const BADetail = () => {
  return (
    <>
      <img className="banners" src={Data.imgBanners} alt="Img-banners" />
      <section className="box-1-data-ba">
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
      <section className="box-2-data-ba">
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
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.participants4}</p>
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
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />
                  <p>{Data.wheredowork6}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="box-3-data-ba">
        <div>
          <WhyChoseMe />
        </div>
      </section>
      <section className="box-4-data-ba">
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
      <section id="courseDetail" className="box-5-data-ba">
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
              </ul>
              <div className="day"> {Data.day2}</div>
              <ul>
                <li>{Data.module1_row3}</li>
                <li>{Data.module1_row4}</li>
              </ul>
              <div className="day"> {Data.day3}</div>
              <ul>
                <li>{Data.module1_row5}</li>
                <li>{Data.module1_row6}</li>
                <li>{Data.module1_row7}</li>
                <li>{Data.module1_row8}</li>
                <li>{Data.module1_row9}</li>
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
              <div className="day"> {Data.day4}</div>
              <ul>
                <li>{Data.module2_row1}</li>
                <li>{Data.module2_row2}</li>
                <li>{Data.module2_row3}</li>
              </ul>
              <div className="day"> {Data.day5}</div>
              <ul>
                <li>{Data.module2_row4}</li>
                <li>{Data.module2_row5}</li>
                <li>{Data.module2_row6}</li>
                <li>{Data.module2_row7}</li>
                <li>{Data.module2_row8}</li>
              </ul>
              <div className="day"> {Data.day6}</div>
              <ul>
                <li>{Data.module2_row9}</li>
                <li>{Data.module2_row10}</li>
                <li>{Data.module2_row11}</li>
                <li>{Data.module2_row12}</li>
                <li>{Data.module2_row13}</li>
                <li>{Data.module2_row14}</li>
              </ul>
              <div className="day"> {Data.day7}</div>
              <ul>
                <li>{Data.module2_row15}</li>
                <li>{Data.module2_row16}</li>
                <li>{Data.module2_row17}</li>
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
              <div className="day"> {Data.day8}</div>
              <ul>
                <li>{Data.module3_row1}</li>
                <li>{Data.module3_row2}</li>
                <li>{Data.module3_row3}</li>
                <li>{Data.module3_row4}</li>
              </ul>
              <div className="day"> {Data.day9_10}</div>
              <ul>
                <li>{Data.module3_row5}</li>
                <li>{Data.module3_row6}</li>
                <li>{Data.module3_row7}</li>
                <li>{Data.module3_row8}</li>
              </ul>
              <div className="day"> {Data.day11}</div>
              <ul>
                <li>{Data.module3_row9}</li>
                <li>{Data.module3_row10}</li>
              </ul>
              <div className="day"> {Data.day12}</div>
              <ul>
                <li>{Data.module3_row11}</li>
                <li>{Data.module3_row12}</li>
              </ul>
              <div className="day"> {Data.day13}</div>
              <ul>
                <li>{Data.module3_row13}</li>
                <li>{Data.module3_row14}</li>
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
              <div className="day"> {Data.day14_15}</div>
              <ul>
                <li>{Data.module4_row1}</li>
                <li>{Data.module4_row2}</li>
                <li>{Data.module4_row3}</li>
              </ul>
              <div className="day"> {Data.day16_17}</div>
              <ul>
                <li>{Data.module4_row4}</li>
                <li>{Data.module4_row5}</li>
                <li>{Data.module4_row6}</li>
              </ul>
              <div className="day"> {Data.day18_19}</div>
              <ul>
                <li>{Data.module4_row7}</li>
                <li>{Data.module4_row8}</li>
                <li>{Data.module4_row9}</li>
              </ul>
              <div className="day"> {Data.day20_21}</div>
              <ul>
                <li>{Data.module4_row10}</li>
                <li>{Data.module4_row11}</li>
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
              <div className="day"> {Data.day22_23}</div>
              <ul>
                <li>{Data.module5_row1}</li>
                <li>{Data.module5_row2}</li>
                <li>{Data.module5_row3}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module5_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 6 */}
        <div>
          <div className="node">Module 6</div>
        </div>
        <div className="content-box-5">
          <div className="line"> </div>
          <div className="point"></div>
          <div className="module-6">
            <div className="left">
              <img src={Data.module6_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module6_title}</p>
              <div className="day"> {Data.day24}</div>
              <ul>
                <li>{Data.module6_row1}</li>
                <li>{Data.module6_row2}</li>
                <li>{Data.module6_row3}</li>
                <li>{Data.module6_row4}</li>
                <li>{Data.module6_row5}</li>
                <li>{Data.module6_row6}</li>
              </ul>
              <div className="day"> {Data.day25}</div>
              <ul>
                <li>{Data.module6_row7}</li>
                <li>{Data.module6_row8}</li>
                <li>{Data.module6_row9}</li>
                <li>{Data.module6_row10}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODULE 7 */}
        <div>
          <div className="node">Module 7</div>
        </div>
        <div className="content-box-5">
          <div className="line"> </div>
          <div className="point"></div>
          <div className="module-7">
            <div className="left">
              <p className="module-title">{Data.module7_title}</p>
              <div className="day"> {Data.day26}</div>
              <ul>
                <li>{Data.module7_row1}</li>
                <li>{Data.module7_row2}</li>
                <li>{Data.module7_row3}</li>
                <li>{Data.module7_row4}</li>
                <li>{Data.module7_row5}</li>
              </ul>
              <div className="day"> {Data.day27}</div>
              <ul>
                <li>{Data.module7_row6}</li>
                <li>{Data.module7_row7}</li>
              </ul>
            </div>
            <div className="right">
              <img src={Data.module7_img} alt="Image-box-5" />
            </div>
          </div>
        </div>
        {/* MODULE 8 */}
        <div>
          <div className="node">Module 8</div>
        </div>
        <div className="content-box-5">
          <div className="line"> </div>
          <div className="point"></div>
          <div className="module-8">
            <div className="left">
              <img src={Data.module8_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module8_title}</p>
              <div className="day"> {Data.day28_29_30_31_32}</div>
              <ul>
                <li>{Data.module8_row1}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
