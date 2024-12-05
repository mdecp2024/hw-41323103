var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323103 \n 個人網站: https://mdecp2024.github.io/hw-41323103/content/About.html \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一： \n \n 題目二： \n \n 題目三： \n 解題流程與心得: \n 將要解決的物理或微積分題目用程式告訴電腦並讓它幫我們算出正確答案，這是我們可以更加快速地得知類似題目的正確答案。 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '題目一: \n 程式碼 \n \n 題目二: \n 程式碼2 \n \n \n 解題過程與心得: \n 我透過chatgpt了解到了老師題目的意義和解決方法，這讓我能更快速的理解題意，也讓我找到更好的解題方法。 \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '請各組組員分別利用 \xa0 Brython 以及 Jupyter lab \xa0 環境, 執行 可攜程式 \xa0 notebook 目錄中的 \xa0 01_string_input_print.ipynb 至\xa010_for_search.ipynb \xa0 筆記本程式, 完成後請將能在 Brython 執行的程式碼存入個人 \xa0 Gist \xa0 後, 將各程式執行連結放入 w12_hw 網頁上. 最後請說明各範例中所使用的程式語法以及執行心得。 \n 第七題 \n 07_list_slicing_use \n 說明： \n 程式語法： \n 運用切片(範圍： [start:end] 、步長： [start:end:step] ） \n 元素替換( 清單[第幾項] = "替換後的項目名稱" ) \n 插入( 清單[start:end] \xa0+ ["要插入的項目"] + 清單 [ start:end]) \n 添加( 清單 + ["要加入的項目"] ) \n 刪除( del ) \n 第七題程式碼範例 \n # 定義包含五種感官的清單\nsenses = ["eyes", "nose", "ears", "tongue", "skin"]\nprint(senses)  # 輸出: [\'eyes\', \'nose\', \'ears\', \'tongue\', \'skin\']\n\n# 修改索引1（第二個元素），將 "nose" 改為 "smell"\nsenses[1] = "smell"\nprint(senses)  # 輸出: [\'eyes\', \'smell\', \'ears\', \'tongue\', \'skin\']\n\n# 使用切片修改索引3到4（包含 "tongue" 和 "skin"），將其替換為 "taste" 和 "touch"\nsenses[3:5] = ["taste", "touch"]\nprint(senses)  # 輸出: [\'eyes\', \'smell\', \'ears\', \'taste\', \'touch\']\n\n# 使用步長為2的切片，修改索引0、2、4的元素，將其替換為 "sight" 和 "hearing"\nsenses[0:3:2] = ["sight", "hearing"]\nprint(senses)  # 輸出: [\'sight\', \'smell\', \'hearing\', \'taste\', \'touch\']\n\n# 定義包含四顆行星的清單\nplanets = ["Mercury", "Mars", "Earth", "Neptune"]\nprint(planets)  # 輸出: [\'Mercury\', \'Mars\', \'Earth\', \'Neptune\']\n\n# 在清單末尾添加 "Jupiter"\nplanets = planets + ["Jupiter"]\nprint(planets)  # 輸出: [\'Mercury\', \'Mars\', \'Earth\', \'Neptune\', \'Jupiter\']\n\n# 使用切片將 "Venus" 插入到 "Mars" 和 "Earth" 之間\nplanets = planets[0:2] + ["Venus"] + planets[2:5]\nprint(planets)  # 輸出: [\'Mercury\', \'Mars\', \'Venus\', \'Earth\', \'Neptune\', \'Jupiter\']\n\n# 在 "Neptune" 後插入 "Uranus" 和 "Saturn"\nplanets = planets[:5] + ["Uranus", "Saturn"] + planets[5:]\nprint(planets)  # 輸出: [\'Mercury\', \'Mars\', \'Venus\', \'Earth\', \'Neptune\', \'Uranus\', \'Saturn\', \'Jupiter\']\n\n# 定義一個包含不同房間名稱的清單\nhouse = ["kitchen", "dining room", "living room", "bedroom", "bathroom", "garden", "balcony", "terrace"]\nprint(house)  # 輸出: [\'kitchen\', \'dining room\', \'living room\', \'bedroom\', \'bathroom\', \'garden\', \'balcony\', \'terrace\']\n\n# 刪除索引1（第二個元素）的 "dining room"\ndel house[1]\nprint(house)  # 輸出: [\'kitchen\', \'living room\', \'bedroom\', \'bathroom\', \'garden\', \'balcony\', \'terrace\']\n\n# 刪除從索引4到5的元素，這是 "garden" 和 "balcony"\ndel house[4:6]\nprint(house)  # 輸出: [\'kitchen\', \'living room\', \'bedroom\', \'bathroom\', \'terrace\']\n\n# 使用步長為2的切片，刪除清單中每隔一個的元素（即索引為0、2、4的元素）\ndel house[::2]\nprint(house)  # 輸出: [\'living room\', \'bathroom\']\n\n# 刪除整個清單\ndel house\n# 試圖打印已經刪除的清單會引發錯誤\nprint(house)  # 這會拋出錯誤: NameError: name \'house\' is not defined \n \n 程式碼 \n \n 解題過程與心得: \n 今天我們使用Python來輸出文字， Python的語法比較直白， Python 的 print() 函式是一個基礎又強大的工具，無論是要顯示簡單的訊息，還是格式化輸出複雜的資料，都可以輕鬆實現。我還學習到了如何用for迴圈來排列要輸出的資料。', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};