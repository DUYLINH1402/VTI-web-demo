import './fullStack.scss';
import { Footer } from '../../Home/Footer';
import { WhyChoseMe } from '../UtilData/WhyChoseMe';
import { Data } from './DataFullStack';
export const FullStackDetail = () => {
  return (
    <>
      <img className="banners" src={Data.imgBanners} alt="Img-banners" />
      <section className="box-1-data-fullstack">
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
      <section className="box-2-data-fullstack">
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
      <section className="box-3-data-fullstack">
        <div>
          <WhyChoseMe />
        </div>
      </section>
      <section className="box-4-data-fullstack">
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
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row3}
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row4}
                </li>
                <li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row5}
                </li><li>
                  <img
                    className="icon-logo"
                    src={Data.iconLogo}
                    alt="img err"
                  />{' '}
                  {Data.box4_row6}
                </li>
              </ul>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
      <section id="courseDetail" className="box-5-data-fullstack">
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
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module1_row1}</li>
                <li>{Data.module1_row2}</li>
                <li>{Data.module1_row3}</li>
                <li>{Data.module1_row4}</li>
                <li>{Data.module1_row5}</li>
                <li>{Data.module1_row6}</li>
                <li>{Data.module1_row7}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module1_row8}</li>
                <li>{Data.module1_row9}</li>
                <li>{Data.module1_row10}</li>
                <li>{Data.module1_row11}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module1_row12}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module1_row13}</li>
                <li>{Data.module1_row14}</li>
                <li>{Data.module1_row15}</li>
                <li>{Data.module1_row16}</li>
                <li>{Data.module1_row17}</li>
                <li>{Data.module1_row18}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module1_row19}</li>
                <li>{Data.module1_row20}</li>
                <li>{Data.module1_row21}</li>
                <li>{Data.module1_row22}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module1_row23}</li>
              </ul>
              <p className="day"> Day 7</p>
              <ul>
                <li>{Data.module1_row24}</li>
                <li>{Data.module1_row25}</li>
                <li>{Data.module1_row26}</li>
                <li>{Data.module1_row27}</li>
                <li>{Data.module1_row28}</li>
              </ul>
              <p className="day"> Day 8</p>
              <ul>
                <li>{Data.module1_row29}</li>
                <li>{Data.module1_row30}</li>
                <li>{Data.module1_row31}</li>
                <li>{Data.module1_row32}</li>
                <li>{Data.module1_row33}</li>
              </ul>
              <p className="day"> Day 9</p>
              <ul>
                <li>{Data.module1_row34}</li>
              </ul>
              <p className="day"> Day 10</p>
              <ul>
                <li>{Data.module1_row35}</li>
                <li>{Data.module1_row36}</li>
                <li>{Data.module1_row37}</li>
                <li>{Data.module1_row38}</li>
                <li>{Data.module1_row39}</li>
              </ul>
              <p className="day"> Day 11</p>
              <ul>
                <li>{Data.module1_row40}</li>
              </ul>
              <p className="day"> Day 12</p>
              <ul>
                <li>{Data.module1_row41}</li>
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
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module2_row1}</li>
                <li>{Data.module2_row2}</li>
                <li>{Data.module2_row3}</li>
                <li>{Data.module2_row4}</li>
                <li>{Data.module2_row5}</li>
                <li>{Data.module2_row6}</li>
                <li>{Data.module2_row7}</li>
                <li>{Data.module2_row8}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module2_row9}</li>
                <li>{Data.module2_row10}</li>
                <li>{Data.module2_row11}</li>
                <li>{Data.module2_row12}</li>
                <li>{Data.module2_row13}</li>
                <li>{Data.module2_row14}</li>
                <li>{Data.module2_row15}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module2_row16}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module2_row17}</li>
                <li>{Data.module2_row18}</li>
                <li>{Data.module2_row19}</li>
                <li>{Data.module2_row20}</li>
                <li>{Data.module2_row21}</li>
                <li>{Data.module2_row22}</li>
                <li>{Data.module2_row23}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module2_row24}</li>
                <li>{Data.module2_row25}</li>
                <li>{Data.module2_row26}</li>
                <li>{Data.module2_row27}</li>
                <li>{Data.module2_row28}</li>
                <li>{Data.module2_row29}</li>
                <li>{Data.module2_row30}</li>
                <li>{Data.module2_row31}</li>
                <li>{Data.module2_row32}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module2_row33}</li>
              </ul>
              <p className="day"> Day 7</p>
              <ul>
                <li>{Data.module2_row34}</li>
                <li>{Data.module2_row35}</li>
                <li>{Data.module2_row36}</li>
                <li>{Data.module2_row37}</li>
                <li>{Data.module2_row38}</li>
                <li>{Data.module2_row39}</li>
              </ul>
              <p className="day"> Day 8</p>
              <ul>
                <li>{Data.module2_row40}</li>
              </ul>
              <p className="day"> Day 9</p>
              <ul>
                <li>{Data.module2_row41}</li>
                <li>{Data.module2_row42}</li>
                <li>{Data.module2_row43}</li>
                <li>{Data.module2_row44}</li>
              </ul>
              <p className="day"> Day 10</p>
              <ul>
                <li>{Data.module2_row45}</li>
                <li>{Data.module2_row46}</li>
                <li>{Data.module2_row47}</li>
                <li>{Data.module2_row48}</li>
                <li>{Data.module2_row49}</li>
                <li>{Data.module2_row50}</li>
                <li>{Data.module2_row51}</li>
              </ul>
              <p className="day"> Day 11</p>
              <ul>
                <li>{Data.module2_row52}</li>
                <li>{Data.module2_row53}</li>
                <li>{Data.module2_row54}</li>
                <li>{Data.module2_row55}</li>
              </ul>
              <p className="day"> Day 12</p>
              <ul>
                <li>{Data.module2_row56}</li>
              </ul>
              <p className="day"> Day 13</p>
              <ul>
                <li>{Data.module2_row57}</li>
                <li>{Data.module2_row58}</li>
                <li>{Data.module2_row59}</li>
                <li>{Data.module2_row60}</li>
                <li>{Data.module2_row61}</li>
                <li>{Data.module2_row62}</li>
                <li>{Data.module2_row63}</li>
                <li>{Data.module2_row64}</li>
              </ul>
              <p className="day"> Day 14</p>
              <ul>
                <li>{Data.module2_row65}</li>
                <li>{Data.module2_row66}</li>
                <li>{Data.module2_row67}</li>
                <li>{Data.module2_row68}</li>
                <li>{Data.module2_row69}</li>
                <li>{Data.module2_row70}</li>
                <li>{Data.module2_row71}</li>
              </ul>
              <p className="day"> Day 15</p>
              <ul>
                <li>{Data.module2_row72}</li>
              </ul>
              <p className="day"> Day 16</p>
              <ul>
                <li>{Data.module2_row73}</li>
                <li>{Data.module2_row74}</li>
                <li>{Data.module2_row75}</li>
              </ul>
              <p className="day"> Day 17</p>
              <ul>
                <li>{Data.module2_row76}</li>
              </ul>
              <p className="day"> Day 17</p>
              <ul>
                <li>{Data.module2_row77}</li>
                <li>{Data.module2_row78}</li>
                <li>{Data.module2_row79}</li>
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

          <div className="point"></div>
          <div className="module-3">
            <div className="left">
              <p className="module-title">{Data.module3_title}</p>
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module3_row1}</li>
                <li>{Data.module3_row2}</li>
                <li>{Data.module3_row3}</li>
                <li>{Data.module3_row4}</li>
                <li>{Data.module3_row5}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module3_row6}</li>
                <li>{Data.module3_row7}</li>
                <li>{Data.module3_row8}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module3_row9}</li>
                <li>{Data.module3_row10}</li>
                <li>{Data.module3_row11}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module3_row12}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module3_row13}</li>
                <li>{Data.module3_row14}</li>
                <li>{Data.module3_row15}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module3_row16}</li>
                <li>{Data.module3_row17}</li>
                <li>{Data.module3_row18}</li>
                <li>{Data.module3_row19}</li>
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
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module4_row1}</li>
                <li>{Data.module4_row2}</li>
                <li>{Data.module4_row3}</li>
                <li>{Data.module4_row4}</li>
                <li>{Data.module4_row5}</li>
                <li>{Data.module4_row6}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module4_row7}</li>
                <li>{Data.module4_row8}</li>
                <li>{Data.module4_row9}</li>
                <li>{Data.module4_row10}</li>
                <li>{Data.module4_row11}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module4_row12}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module4_row13}</li>
                <li>{Data.module4_row14}</li>
                <li>{Data.module4_row15}</li>
                <li>{Data.module4_row16}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module4_row17}</li>
                <li>{Data.module4_row18}</li>
                <li>{Data.module4_row19}</li>
                <li>{Data.module4_row20}</li>
                <li>{Data.module4_row21}</li>
                <li>{Data.module4_row22}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module4_row23}</li>
              </ul>
              <p className="day"> Day 7</p>
              <ul>
                <li>{Data.module4_row24}</li>
                <li>{Data.module4_row25}</li>
                <li>{Data.module4_row26}</li>
                <li>{Data.module4_row27}</li>
                <li>{Data.module4_row28}</li>
                <li>{Data.module4_row29}</li>
              </ul>
              <p className="day"> Day 8</p>
              <ul>
                <li>{Data.module4_row30}</li>
                <li>{Data.module4_row31}</li>
                <li>{Data.module4_row32}</li>
                <li>{Data.module4_row33}</li>
                <li>{Data.module4_row34}</li>
              </ul>
              <p className="day"> Day 9</p>
              <ul>
                <li>{Data.module4_row35}</li>
              </ul>
              <p className="day"> Day 10</p>
              <ul>
                <li>{Data.module4_row36}</li>
                <li>{Data.module4_row37}</li>
                <li>{Data.module4_row38}</li>
                <li>{Data.module4_row39}</li>
                <li>{Data.module4_row40}</li>
              </ul>
              <p className="day"> Day 11</p>
              <ul>
                <li>{Data.module4_row41}</li>
                <li>{Data.module4_row42}</li>
                <li>{Data.module4_row43}</li>
                <li>{Data.module4_row44}</li>
                <li>{Data.module4_row45}</li>
              </ul>
              <p className="day"> Day 12</p>
              <ul>
                <li>{Data.module4_row46}</li>
              </ul>
              <p className="day"> Day 13</p>
              <ul>
                <li>{Data.module4_row47}</li>
                <li>{Data.module4_row48}</li>
                <li>{Data.module4_row49}</li>
                <li>{Data.module4_row50}</li>
                <li>{Data.module4_row51}</li>
                <li>{Data.module4_row52}</li>
              </ul>
              <p className="day"> Day 14</p>
              <ul>
                <li>{Data.module4_row53}</li>
                <li>{Data.module4_row54}</li>
                <li>{Data.module4_row55}</li>
                <li>{Data.module4_row56}</li>
                <li>{Data.module4_row57}</li>
              </ul>
              <p className="day"> Day 15</p>
              <ul>
                <li>{Data.module4_row58}</li>
              </ul>
              <p className="day"> Day 16+17</p>
              <ul>
                <li>{Data.module4_row59}</li>
                <li>{Data.module4_row60}</li>

              </ul>
              <p className="day"> Day 18</p>
              <ul>
                <li>{Data.module4_row61}</li>
                <li>{Data.module4_row62}</li>
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
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module5_row1}</li>
                <li>{Data.module5_row2}</li>
                <li>{Data.module5_row3}</li>
                <li>{Data.module5_row4}</li>
                <li>{Data.module5_row5}</li>
                <li>{Data.module5_row6}</li>
                <li>{Data.module5_row7}</li>
                <li>{Data.module5_row8}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module5_row9}</li>
                <li>{Data.module5_row10}</li>
                <li>{Data.module5_row11}</li>
                <li>{Data.module5_row12}</li>
                <li>{Data.module5_row13}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module5_row14}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module5_row15}</li>
                <li>{Data.module5_row16}</li>
                <li>{Data.module5_row17}</li>
                <li>{Data.module5_row18}</li>
                <li>{Data.module5_row19}</li>
                <li>{Data.module5_row20}</li>
                <li>{Data.module5_row21}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module5_row22}</li>
                <li>{Data.module5_row23}</li>
                <li>{Data.module5_row24}</li>
                <li>{Data.module5_row25}</li>
                <li>{Data.module5_row26}</li>
                <li>{Data.module5_row27}</li>
                <li>{Data.module5_row28}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module5_row29}</li>
              </ul>
              <p className="day"> Day 7</p>
              <ul>
                <li>{Data.module5_row30}</li>
                <li>{Data.module5_row31}</li>
                <li>{Data.module5_row32}</li>
                <li>{Data.module5_row33}</li>
                <li>{Data.module5_row34}</li>
              </ul>
              <p className="day"> Day 8</p>
              <ul>
                <li>{Data.module5_row35}</li>
                <li>{Data.module5_row36}</li>
                <li>{Data.module5_row37}</li>
                <li>{Data.module5_row38}</li>
                <li>{Data.module5_row39}</li>
              </ul>
              <p className="day"> Day 9</p>
              <ul>
                <li>{Data.module5_row40}</li>
              </ul>
              <p className="day"> Day 10</p>
              <ul>
                <li>{Data.module5_row41}</li>
                <li>{Data.module5_row42}</li>
                <li>{Data.module5_row43}</li>
                <li>{Data.module5_row44}</li>
                <li>{Data.module5_row45}</li>
                <li>{Data.module5_row46}</li>
              </ul>
              <p className="day"> Day 11</p>
              <ul>
                <li>{Data.module5_row47}</li>
                <li>{Data.module5_row48}</li>
                <li>{Data.module5_row49}</li>
              </ul>
              <p className="day"> Day 12</p>
              <ul>
                <li>{Data.module5_row50}</li>
              </ul>
              <p className="day"> Day 13</p>
              <ul>
                <li>{Data.module5_row51}</li>
                <li>{Data.module5_row52}</li>
                <li>{Data.module5_row53}</li>
                <li>{Data.module5_row54}</li>
              </ul>
              <p className="day"> Day 14</p>
              <ul>
                <li>{Data.module5_row55}</li>
                <li>{Data.module5_row56}</li>
                <li>{Data.module5_row57}</li>
                <li>{Data.module5_row58}</li>
                <li>{Data.module5_row59}</li>
              </ul>
              <p className="day"> Day 15</p>
              <ul>
                <li>{Data.module5_row60}</li>
              </ul>
              <p className="day"> Day 16</p>
              <ul>
                <li>{Data.module5_row61}</li>
                <li>{Data.module5_row62}</li>
                <li>{Data.module5_row63}</li>
                <li>{Data.module5_row64}</li>
              </ul>
              <p className="day"> Day 17</p>
              <ul>
                <li>{Data.module5_row65}</li>
              </ul>
              <p className="day"> Day 18</p>
              <ul>
                <li>{Data.module5_row66}</li>
                <li>{Data.module5_row67}</li>
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
          {/* Đường thẳng từ trên xuống dưới */}
          <div className="line"> </div>
          {/* Điểm tròn chính giữ */}
          <div className="point"></div>
          <div className="module-6">
            <div className="left">
              <img src={Data.module6_img} alt="Image-box-5" />
            </div>
            <div className="right">
              <p className="module-title">{Data.module6_title}</p>
              <div className="day"> Day 0</div>
              <ul>
                <li>{Data.module6_row1}</li>
              </ul>
              <div className="day"> Day 1</div>
              <ul>
                <li>{Data.module6_row2}</li>
                <li>{Data.module6_row3}</li>
                <li>{Data.module6_row4}</li>
                <li>{Data.module6_row5}</li>
              </ul>
              <p className="day"> Day 2</p>
              <ul>
                <li>{Data.module6_row6}</li>
                <li>{Data.module6_row7}</li>
                <li>{Data.module6_row8}</li>
                <li>{Data.module6_row9}</li>
              </ul>
              <p className="day"> Day 3</p>
              <ul>
                <li>{Data.module6_row10}</li>
                <li>{Data.module6_row11}</li>
                <li>{Data.module6_row12}</li>
                <li>{Data.module6_row13}</li>
                <li>{Data.module6_row14}</li>
                <li>{Data.module6_row15}</li>
              </ul>
              <p className="day"> Day 4</p>
              <ul>
                <li>{Data.module6_row16}</li>
                <li>{Data.module6_row17}</li>
                <li>{Data.module6_row18}</li>
                <li>{Data.module6_row19}</li>
                <li>{Data.module6_row20}</li>
                <li>{Data.module6_row21}</li>
              </ul>
              <p className="day"> Day 5</p>
              <ul>
                <li>{Data.module6_row22}</li>
                <li>{Data.module6_row23}</li>
                <li>{Data.module6_row24}</li>
                <li>{Data.module6_row25}</li>
              </ul>
              <p className="day"> Day 6</p>
              <ul>
                <li>{Data.module6_row26}</li>
                <li>{Data.module6_row27}</li>
                <li>{Data.module6_row28}</li>
                <li>{Data.module6_row29}</li>
                <li>{Data.module6_row30}</li>
              </ul>
              <p className="day"> Day 7</p>
              <ul>
                <li>{Data.module6_row31}</li>
                <li>{Data.module6_row32}</li>
                <li>{Data.module6_row33}</li>
                <li>{Data.module6_row34}</li>
              </ul>
              <p className="day"> Day 8</p>
              <ul>
                <li>{Data.module6_row35}</li>
              </ul>
              <p className="day"> Day 9</p>
              <ul>
                <li>{Data.module6_row36}</li>
                <li>{Data.module6_row37}</li>
              </ul>
              <p className="day"> Day 10</p>
              <ul>
                <li>{Data.module6_row38}</li>
                <li>{Data.module6_row39}</li>
              </ul>

              <p className="day"> Day 11</p>
              <ul>
                <li>{Data.module6_row40}</li>
                <li>{Data.module6_row41}</li>
              </ul>
              <p className="day"> Day 12</p>
              <ul>
                <li>{Data.module6_row42}</li>
                <li>{Data.module6_row43}</li>
                <li>{Data.module6_row44}</li>
              </ul>
              <p className="day"> Day 13+14+15+16</p>
              <ul>
                <li>{Data.module6_row45}</li>
                <li>{Data.module6_row46}</li>
              </ul>
              <p className="day"> Day 17+18</p>
              <ul>
                <li>{Data.module6_row47}</li>
              </ul>
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  );
};
