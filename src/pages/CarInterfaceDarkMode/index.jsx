import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const CarInterfaceDarkModePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-cabin items-center justify-end mx-auto pt-0.5 w-full">
        <div className="flex flex-col gap-[9px] items-center justify-end w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1690px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[326px] items-center justify-start w-[5%] md:w-full">
              <div className="h-20 relative w-20">
                <Img
                  className="h-20 m-auto rounded-[50%] w-20"
                  src="images/img_ellipse35.png"
                  alt="ellipseThirtyFive"
                />
                <div className="absolute h-20 inset-[0] justify-center m-auto w-20">
                  <Img
                    className="h-20 m-auto rounded-[50%] w-20"
                    src="images/img_ellipse35.png"
                    alt="ellipseThirtyEight"
                  />
                  <div className="absolute h-20 inset-[0] justify-center m-auto w-20">
                    <Img
                      className="h-20 m-auto rounded-[50%] w-20"
                      src="images/img_ellipse35.png"
                      alt="ellipseForty"
                    />
                    <Img
                      className="absolute h-20 inset-[0] justify-center m-auto rounded-[50%] w-20"
                      src="images/img_ellipse35.png"
                      alt="ellipseFortyThree"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-3/4 md:w-full">
                <Img
                  className="h-10 md:h-auto ml-1 md:ml-[0] object-cover w-10"
                  src="images/img_maskgroup.png"
                  alt="maskgroup"
                />
                <Img
                  className="h-[35px] md:h-auto md:ml-[0] ml-[9px] mt-[85px] object-cover w-[35px]"
                  src="images/img_maskgroup_35x35.png"
                  alt="maskgroup_One"
                />
                <div className="md:h-[351px] h-[60px] mt-[291px] relative w-[60px]">
                  <Img
                    className="h-[60px] m-auto rounded-[50%] w-[60px]"
                    src="images/img_ellipse34.png"
                    alt="ellipseThirtyFour"
                  />
                  <div className="absolute h-[60px] inset-[0] justify-center m-auto w-[60px]">
                    <Img
                      className="h-[60px] m-auto rounded-[50%] w-[60px]"
                      src="images/img_ellipse34.png"
                      alt="ellipseThirtySeven"
                    />
                    <div className="absolute h-[60px] inset-[0] justify-center m-auto w-[60px]">
                      <Img
                        className="h-[60px] m-auto rounded-[50%] w-[60px]"
                        src="images/img_ellipse34.png"
                        alt="ellipseThirtyNine"
                      />
                      <Img
                        className="absolute h-[60px] inset-[0] justify-center m-auto rounded-[50%] w-[60px]"
                        src="images/img_ellipse34.png"
                        alt="ellipseFortyTwo"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[19px] md:h-[38px] ml-2 md:ml-[0] mt-[19px] relative w-3/4">
                  <a
                    href="javascript:"
                    className="m-auto text-[15px] text-white-A700"
                  >
                    <Text size="txtCabinRegular15">Logout</Text>
                  </a>
                  <div className="absolute h-[19px] inset-[0] justify-center m-auto w-full">
                    <a
                      href="javascript:"
                      className="m-auto text-[15px] text-white-A700"
                    >
                      <Text size="txtCabinRegular15">Logout</Text>
                    </a>
                    <div className="absolute h-[19px] inset-[0] justify-center m-auto w-full">
                      <a
                        href="javascript:"
                        className="m-auto text-[15px] text-white-A700"
                      >
                        <Text size="txtCabinRegular15">Logout</Text>
                      </a>
                      <a
                        href="javascript:"
                        className="absolute h-full inset-[0] justify-center m-auto text-[15px] text-white-A700 w-max"
                      >
                        <Text size="txtCabinRegular15">Logout</Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-start md:ml-[0] ml-[18px] mt-2 w-[25px]"
                  style={{ backgroundImage: "url('images/img_group13.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-start w-[25px]"
                    style={{ backgroundImage: "url('images/img_group13.svg')" }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-start w-[25px]"
                      style={{
                        backgroundImage: "url('images/img_group13.svg')",
                      }}
                    >
                      <Img
                        className="h-[25px] w-[25px]"
                        src="images/img_group13.svg"
                        alt="cut"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-teal-600_4c h-[1071px] md:h-[3px] md:ml-[0] ml-[21px] w-[3px] md:w-full" />
            <div className="flex md:flex-1 flex-row items-center justify-start w-[1%] md:w-full">
              <Line className="bg-teal-600_4c h-[1071px] w-[3px]" />
              <div className="flex flex-row items-center justify-start w-full">
                <Line className="bg-teal-600_4c h-[1071px] w-[3px]" />
                <Line className="bg-teal-600_4c h-[1071px] w-[3px]" />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[23px] items-center justify-start md:ml-[0] ml-[88px] w-[41%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-[11px] items-center justify-center p-[77px] md:px-10 sm:px-5 rounded-[10px] w-[46%] md:w-full">
                  <Img
                    className="h-10 mt-6 w-10"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                  <Text
                    className="mb-[38px] md:text-2xl sm:text-[22px] text-[26px] text-blue-A700"
                    size="txtCabinRegular26"
                  >
                    Upload Photo
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[49px] items-center justify-start w-[51%] md:w-full">
                  <Input
                    name="groupSixtyThree"
                    placeholder="Upload Sub Photo"
                    className="leading-[normal] md:text-xl p-0 placeholder:text-blue-A700 sm:px-5 sm:text-lg text-[22px] text-blue-A700 text-left w-full"
                    wrapClassName="bg-white-A700 flex px-[35px] py-[23px] rounded-[10px] w-full"
                    prefix={
                      <Img
                        className="h-10 mr-[29px] my-auto"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                    }
                  ></Input>
                  <div className="bg-white-A700 flex flex-row gap-[29px] items-center justify-start p-5 rounded-[10px] w-full">
                    <div className="h-10 md:h-[47px] mb-[7px] ml-[21px] relative w-10">
                      <Line className="absolute bg-indigo-200_01 h-10 inset-[0] justify-center m-auto w-[3px]" />
                      <div className="absolute bg-indigo-200_01 bottom-[43%] h-[3px] inset-x-[0] mx-auto w-full"></div>
                    </div>
                    <Text
                      className="text-[22px] text-blue-A700 sm:text-lg md:text-xl"
                      size="txtCabinRegular22"
                    >
                      Upload Sub Photo
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                <Line className="bg-white-A700 h-[3px] w-full" />
                <Text
                  className="mt-7 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtCabinBold30"
                >
                  SPECIFICATIONS
                </Text>
                <div className="h-[90px] md:h-[95px] mt-[17px] relative w-[97%] md:w-full">
                <input
                  className="bg-white-A700 h-[70px] rounded-[10px] w-[100%]"
                  type="number"
                  alt="tyre"
                />
                  <Text
                    className="absolute left-[11%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 top-[0]"
                    size="txtCabinRegular25"
                  >
                    Tyre
                  </Text>
                </div>
                <div className="h-[93px] md:h-[99px] mt-[21px] relative w-[97%] md:w-full">
                  <Img
                    className="absolute bottom-[0] h-[78px] inset-x-[0] mx-auto"
                    src="images/img_group1.svg"
                    alt="groupSixtyFour"
                  />
                  <Text
                    className="absolute left-[10%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 top-[0]"
                    size="txtCabinRegular25"
                  >
                    Seats
                  </Text>
                </div>
                <div className="h-[93px] md:h-[99px] mt-[21px] relative w-[97%] md:w-full">
                  <Img
                    className="absolute bottom-[0] h-[78px] inset-x-[0] mx-auto"
                    src="images/img_group1.svg"
                    alt="groupSixtyFive"
                  />
                  <Text
                    className="absolute left-[10%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 top-[0]"
                    size="txtCabinRegular25"
                  >
                    Price
                  </Text>
                </div>
                <div className="h-[93px] mt-[21px] relative w-[97%] md:w-full">
                  <Text
                    className="mb-[-15.3px] ml-[63px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 z-[1]"
                    size="txtCabinRegular25"
                  >
                    Color
                  </Text>
                  <Img
                    className="h-[78px] mt-auto mx-auto"
                    src="images/img_group1.svg"
                    alt="groupSixtySix"
                  />
                </div>
                <div className="h-24 mt-[21px] relative w-[97%] md:w-full">
                  <Text
                    className="mb-[-12.93px] ml-[67px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 z-[1]"
                    size="txtCabinRegular25"
                  >
                    Use
                  </Text>
                  <div className="flex mt-auto mx-auto w-full">
                    <Img
                      className="h-[78px] my-auto rounded-[10px]"
                      src="images/img_folder.svg"
                      alt="folder"
                    />
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[78px] items-end justify-end ml-[-1px] my-auto p-[21px] sm:px-5 rounded-[10px] w-[91%] z-[1]"
                      style={{
                        backgroundImage: "url('images/img_group11.svg')",
                      }}
                    >
                      <Img
                        className="h-[18px] mb-[5px] mt-3"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-white-A700 md:h-[3px] h-[967px] mb-[59px] md:ml-[0] ml-[47px] md:mt-0 mt-[45px] w-[3px] md:w-full" />
            <div className="flex md:flex-1 flex-col items-center justify-start ml-4 md:ml-[0] w-[44%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtCabinBold40"
              >
                WHERE TO FIND
              </Text>
              <div className="flex md:flex-col flex-row gap-[28px] items-center justify-end mt-[57px] w-[85%] md:w-full pr-{20px}">
                <Text className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 " size="txtCabinRegular25">
                  {"Name:"}{' '}
                </Text>
                <input className="bg-white-A700 h-[70px] rounded-[10px] w-[77%]" type="text" />
              </div>
              <div className="flex md:flex-col flex-row gap-3 items-center justify-between mt-[39px] w-[99%] md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 "
                  size="txtCabinRegular25"
                >
                  {"Street (Optional):"}{" "}
                </Text>
                <input className="bg-white-A700 h-[70px] rounded-[10px] w-[73%]" type="text"/>
              </div>
              <div className="flex flex-col justify-start mt-[41px] w-[96%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between md:ml-[0] ml-[5px] w-[98%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtCabinRegular25"
                  >
                    {"Description:"}
                  </Text>
                  <textarea className="bg-white-A700 h-[150px] rounded-[10px] w-[77%] resize-none"></textarea>  
                </div>
                <div className="flex md:flex-col flex-row md:gap-14 items-center justify-between mt-[58px] w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtCabinRegular25"
                  >
                    <>
                      Discount <br />
                      (Optional){" "}
                    </>
                  </Text>
                  <div className="flex flex-col font-roboto items-center justify-start">
                    <List
                      className="flex flex-col gap-[11px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between my-0 w-full">
                        <Text
                          className="bg-blue-A400 h-[50px] justify-center pl-2 pr-1 py-3 rounded-[25px] text-white-A700 text-xl w-[51px]"
                          size="txtRobotoRomanBlack20"
                        >
                          10%
                        </Text>
                        <Button className="bg-blue_gray-100_4c cursor-pointer font-medium leading-[normal] min-w-[149px] sm:mt-0 my-1 py-[9px] rounded-[3px] text-center text-white-A700 text-xl">
                          1 Week
                        </Button>
                        <Img
                          className="h-[35px] sm:mt-0 mt-[9px] w-[35px]"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                        <Text
                          className="bg-blue-A400 h-[50px] justify-center pl-2 pr-1 py-3 rounded-[25px] text-white-A700 text-xl w-[51px]"
                          size="txtRobotoRomanBlack20"
                        >
                          30%
                        </Text>
                        <Button className="bg-blue_gray-100_4c cursor-pointer font-medium leading-[normal] min-w-[149px] sm:mt-0 my-1 py-[9px] rounded-[3px] text-center text-white-A700 text-xl">
                          1 Week
                        </Button>
                        <Img
                          className="h-[35px] sm:mt-0 mt-[9px] w-[35px]"
                          src="images/img_upload.svg"
                          alt="upload_One"
                        />
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between my-0 w-full">
                        <Text
                          className="bg-blue-A400 h-[50px] justify-center pl-2 pr-1 py-3 rounded-[25px] text-white-A700 text-xl w-[51px]"
                          size="txtRobotoRomanBlack20"
                        >
                          10%
                        </Text>
                        <Button className="bg-blue_gray-100_4c cursor-pointer font-medium leading-[normal] min-w-[149px] sm:mt-0 my-1 py-[9px] rounded-[3px] text-center text-white-A700 text-xl">
                          1 Week
                        </Button>
                        <Img
                          className="h-[35px] sm:mt-0 mt-1.5 w-[35px]"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                        <Text
                          className="bg-blue-A400 h-[50px] justify-center pl-2 pr-1 py-3 rounded-[25px] text-white-A700 text-xl w-[51px]"
                          size="txtRobotoRomanBlack20"
                        >
                          20%
                        </Text>
                        <Button className="bg-blue_gray-100_4c cursor-pointer font-medium leading-[normal] min-w-[149px] sm:mt-0 my-1 py-[9px] rounded-[3px] text-center text-white-A700 text-xl">
                          1 Week
                        </Button>
                        <Img
                          className="h-[35px] sm:mt-0 mt-1.5 w-[35px]"
                          src="images/img_upload.svg"
                          alt="upload_One"
                        />
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-black-900 border-2 border-solid border-white-A700 flex flex-col font-inter items-center justify-start md:ml-[0] ml-[401px] mr-[159px] mt-[22px] p-[23px] sm:px-5 rounded-[20px] w-[21%] md:w-full">
                  <div className="flex flex-col gap-2 items-center justify-start mb-[3px] w-[91%] md:w-full">
                    <Button className="bg-blue-A400 cursor-pointer leading-[normal] min-w-[91px] py-1.5 rounded-lg text-[9px] text-center text-white-A700">
                      Get a discount
                    </Button>
                    <Button className="bg-red-800 cursor-pointer leading-[normal] min-w-[91px] py-1.5 rounded-lg text-[9px] text-center text-white-A700">
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row font-cabin gap-1.5 items-center justify-end md:ml-[0] ml-[100px] mt-[23px] w-[77%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-[69%] sm:w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtCabinRegular25"
                    >
                      Provide a driver
                    </Text>
                    <div className="bg-white-A700 border border-black-900 border-solid flex flex-row font-inter gap-[9px] items-start justify-center p-1.5 rounded-[10px]">
                      <Img
                        className="h-10 md:h-auto ml-[22px] rounded-[50%] w-10"
                        src="images/img_ellipse33.png"
                        alt="ellipseThirtyThree"
                      />
                      <Text
                        className="mr-6 mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtInterRegular30"
                      >
                        YES
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900 border-solid flex flex-row font-inter gap-[17px] items-center justify-center p-[7px] rounded-[10px] w-[31%] sm:w-full">
                    <Img
                      className="h-[30px] md:h-auto ml-[19px] object-cover rounded-[15px] w-[29px]"
                      src="images/img_ellipse32.png"
                      alt="ellipseThirtyTwo"
                    />
                    <Text
                      className="mr-[38px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterRegular30"
                    >
                      NO
                    </Text>
                  </div>
                </div>
                <Button className="border-[3px] border-blue-A400 border-solid cursor-pointer leading-[normal] min-w-[203px] md:ml-[0] ml-[494px] mt-[50px] py-[19px] rounded-[10px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700">
                  POST
                </Button>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="md:h-[1191px] h-[375px] relative w-full">
              <div className="absolute bg-black-900_01 flex flex-col font-raleway h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[9px] w-full">
                <div className="flex flex-col items-center justify-start mb-[33px] w-[94%] md:w-full">
                  <div className="flex flex-col gap-8 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                      <Img
                        className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                        src="images/img_ellipse61.png"
                        alt="ellipseSixtyOne"
                      />
                      <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[235px] md:mt-0 mt-[7px] w-[10%] md:w-full">
                        <Text
                          className="ml-0.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-yellow-A700"
                          size="txtRalewayRomanExtraBold25"
                        >
                          MoveSmart
                        </Text>
                        <ul className="flex flex-col font-inter gap-5 items-start justify-start md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-[17px] text-white-A700"
                            >
                              <Text size="txtInterRegular17">Home</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[17px] text-white-A700"
                            >
                              <Text size="txtInterRegular17">About Us</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[17px] text-white-A700"
                            >
                              <Text size="txtInterRegular17">Contact Us</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[227px] md:mt-0 mt-[9px] w-[6%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-yellow-A700"
                          size="txtRalewayRomanExtraBold25"
                        >
                          Help
                        </Text>
                        <ul className="flex flex-col font-inter gap-6 items-start justify-start w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-[17px] text-white-A700"
                            >
                              <Text size="txtInterRegular17">ChatBot</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[17px] text-white-A700"
                            >
                              <Text size="txtInterRegular17">Contact Us</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[230px] md:mt-0 mt-[7px] w-[9%] md:w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-yellow-A700"
                          size="txtRalewayRomanExtraBold25"
                        >
                          Account
                        </Text>
                        <ul className="flex flex-col font-inter gap-[19px] items-start justify-start w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-[17px] text-white-A700_01"
                            >
                              <Text size="txtInterRegular17WhiteA70001">
                                Sign up
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[17px] text-white-A700_01"
                            >
                              <Text size="txtInterRegular17WhiteA70001">
                                Forgot password
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[199px] md:mt-0 mt-[9px] w-[12%] md:w-full">
                        <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0]">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-yellow-A700"
                            size="txtRalewayRomanExtraBold25"
                          >
                            Get our app
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                          <div className="bg-white-A700 flex flex-row items-center justify-start p-0.5 rounded-[7px] w-full">
                            <Img
                              className="h-10 md:h-auto ml-[9px] rounded-[50%] w-10"
                              src="images/img_ellipse59.png"
                              alt="ellipseFiftyNine"
                            />
                            <Text
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                              size="txtRalewayRomanSemiBold22"
                            >
                              Google Play
                            </Text>
                          </div>
                          <div className="bg-white-A700 flex flex-row gap-2 items-end justify-start p-[3px] rounded-[7px] w-full">
                            <Img
                              className="h-[35px] md:h-auto mb-1 ml-[13px] rounded-[50%] w-[35px]"
                              src="images/img_ellipse60.png"
                              alt="ellipseSixty"
                            />
                            <Text
                              className="my-1.5 text-[22px] text-black-900 sm:text-lg md:text-xl"
                              size="txtRalewayRomanSemiBold22"
                            >
                              App Store
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-white-A700 h-0.5 rounded-[1px] w-[94%]" />
                    <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[44%] md:w-full">
                        <Text
                          className="text-white-A700_01 text-xl"
                          size="txtInterRegular20"
                        >
                          Terms and Privacy policy
                        </Text>
                        <Line className="bg-white-A700_01 h-[66px] md:h-px rounded-[1px] md:w-full w-px" />
                        <Img
                          className="h-[29px] md:h-auto object-cover w-[30px] sm:w-full"
                          src="images/img_maskgroup_29x30.png"
                          alt="maskgroup_Two"
                        />
                        <Text
                          className="text-white-A700_01 text-xl"
                          size="txtInterRegular20"
                        >
                          MoveSmart 2023. All rights reserved
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-row items-center justify-between w-[10%] md:w-full">
                        <Img
                          className="h-10 md:h-auto object-cover w-10"
                          src="images/img_maskgroup_40x40.png"
                          alt="maskgroup_Three"
                        />
                        <Img
                          className="h-10 md:h-auto object-cover w-10"
                          src="images/img_maskgroup_1.png"
                          alt="maskgroup_Four"
                        />
                        <Img
                          className="h-10 md:h-auto object-cover w-10"
                          src="images/img_maskgroup_2.png"
                          alt="maskgroup_Five"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="absolute left-[0] text-blue-A200 text-center text-xs top-[37%]"
                size="txtIBMPlexSansRegular12"
              >
                <>
                  “Transportation should be a convenient, <br />
                  stress-free experience for everyone.”
                </>
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default CarInterfaceDarkModePage;
