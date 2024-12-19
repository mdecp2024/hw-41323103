var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323103 \n 個人網站: https://mdecp2024.github.io/hw-41323103/content/About.html \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一： \n \n 題目二： \n \n 題目三： \n 解題流程與心得: \n 將要解決的物理或微積分題目用程式告訴電腦並讓它幫我們算出正確答案，這是我們可以更加快速地得知類似題目的正確答案。 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '題目一: \n 程式碼 \n \n 題目二: \n 程式碼2 \n \n \n 解題過程與心得: \n 我透過chatgpt了解到了老師題目的意義和解決方法，這讓我能更快速的理解題意，也讓我找到更好的解題方法。 \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '請各組組員分別利用 \xa0 Brython 以及 Jupyter lab \xa0 環境, 執行 可攜程式 \xa0 notebook 目錄中的 \xa0 01_string_input_print.ipynb 至\xa010_for_search.ipynb \xa0 筆記本程式, 完成後請將能在 Brython 執行的程式碼存入個人 \xa0 Gist \xa0 後, 將各程式執行連結放入 w12_hw 網頁上. 最後請說明各範例中所使用的程式語法以及執行心得。 \n 第七題 \n 07_list_slicing_use \n 說明： \n 程式語法： \n 運用切片(範圍： [start:end] 、步長： [start:end:step] ） \n 元素替換( 清單[第幾項] = "替換後的項目名稱" ) \n 插入( 清單[start:end] + ["要插入的項目"] +  清單[start:end] ) \n 添加( 清單 + ["要加入的項目"] ) \n 刪除( del ) \n 第七題程式碼範例 \n # 定義包含五種感官的清單\nsenses = ["eyes", "nose", "ears", "tongue", "skin"]\nprint(senses)  # 輸出: [\'eyes\', \'nose\', \'ears\', \'tongue\', \'skin\']\n\n# 修改索引1（第二個元素），將 "nose" 改為 "smell"\nsenses[1] = "smell"\nprint(senses)  # 輸出: [\'eyes\', \'smell\', \'ears\', \'tongue\', \'skin\']\n\n# 使用切片修改索引3到4（包含 "tongue" 和 "skin"），將其替換為 "taste" 和 "touch"\nsenses[3:5] = ["taste", "touch"]\nprint(senses)  # 輸出: [\'eyes\', \'smell\', \'ears\', \'taste\', \'touch\']\n\n# 使用步長為2的切片，修改索引0、2、4的元素，將其替換為 "sight" 和 "hearing"\nsenses[0:3:2] = ["sight", "hearing"]\nprint(senses)  # 輸出: [\'sight\', \'smell\', \'hearing\', \'taste\', \'touch\']\n\n# 定義包含四顆行星的清單\nplanets = ["Mercury", "Mars", "Earth", "Neptune"]\nprint(planets)  # 輸出: [\'Mercury\', \'Mars\', \'Earth\', \'Neptune\']\n\n# 在清單末尾添加 "Jupiter"\nplanets = planets + ["Jupiter"]\nprint(planets)  # 輸出: [\'Mercury\', \'Mars\', \'Earth\', \'Neptune\', \'Jupiter\']\n\n# 使用切片將 "Venus" 插入到 "Mars" 和 "Earth" 之間\nplanets = planets[0:2] + ["Venus"] + planets[2:5]\nprint(planets)  # 輸出: [\'Mercury\', \'Mars\', \'Venus\', \'Earth\', \'Neptune\', \'Jupiter\']\n\n# 在 "Neptune" 後插入 "Uranus" 和 "Saturn"\nplanets = planets[:5] + ["Uranus", "Saturn"] + planets[5:]\nprint(planets)  # 輸出: [\'Mercury\', \'Mars\', \'Venus\', \'Earth\', \'Neptune\', \'Uranus\', \'Saturn\', \'Jupiter\']\n\n# 定義一個包含不同房間名稱的清單\nhouse = ["kitchen", "dining room", "living room", "bedroom", "bathroom", "garden", "balcony", "terrace"]\nprint(house)  # 輸出: [\'kitchen\', \'dining room\', \'living room\', \'bedroom\', \'bathroom\', \'garden\', \'balcony\', \'terrace\']\n\n# 刪除索引1（第二個元素）的 "dining room"\ndel house[1]\nprint(house)  # 輸出: [\'kitchen\', \'living room\', \'bedroom\', \'bathroom\', \'garden\', \'balcony\', \'terrace\']\n\n# 刪除從索引4到5的元素，這是 "garden" 和 "balcony"\ndel house[4:6]\nprint(house)  # 輸出: [\'kitchen\', \'living room\', \'bedroom\', \'bathroom\', \'terrace\']\n\n# 使用步長為2的切片，刪除清單中每隔一個的元素（即索引為0、2、4的元素）\ndel house[::2]\nprint(house)  # 輸出: [\'living room\', \'bathroom\']\n\n# 刪除整個清單\ndel house\n# 試圖打印已經刪除的清單會引發錯誤\nprint(house)  # 這會拋出錯誤: NameError: name \'house\' is not defined \n 第八題 \n 08_for_range \n 說明： \n 程式語法： \n 利用索引連接每個項目位置的名稱( for index in range (範圍起點,範圍終點): ) \n 第八題程式碼範例 \n # 定義朋友的名稱列表\nfriends = ["Geetha", "Luca", "Daisy", "Juhan"]\n# 定義每位朋友的最喜歡的菜餚列表\ndishes  = ["sushi", "burgers", "tacos", "pizza"]\n\n# 輸出朋友的名字\nprint ("My friends\' names are:")\nprint (friends)\n\n# 使用迴圈來列出每個朋友的名字及其索引\nfor index in range (0,4):\n    # 輸出當前索引\n    print ("index:  " + str(index))\n    # 輸出該索引對應的朋友名字\n    print ("friend: " + friends[index])\n\n# 輸出朋友最喜歡的菜餚\nprint ("Their favorite dishes are:")\nprint (dishes)\n\n# 使用迴圈來列出每道菜餚及其索引\nfor index in range (0,4):\n    # 輸出當前索引\n    print ("index:  " + str(index))\n    # 輸出該索引對應的菜餚名稱\n    print ("dish: " + dishes[index])\n\n# 使用迴圈來列出每位朋友及他們最喜歡的菜餚的配對\nfor index in range (0,4):\n    # 輸出每位朋友與他們最喜歡的菜餚的配對訊息\n    print ("My friend " + friends[index] + "\'s favorite dish is " + dishes[index]) \n 第九題 \n 09_for_loop_if_equals \n 說明： \n 程式語法： \n 運用  if  和  else  來區別已特別定義的項目輸出 \n 第九題程式碼範例 \n # 定義包含動物名稱的列表\nanimals = ["giraffe", "penguin", "dolphin"]\n# 輸出動物列表\nprint(animals)\n\n# 使用迴圈遍歷動物列表，顯示每個動物及其位置\nfor i in range(0, len(animals)):\nprint("-- Beginning of loop --")\n# 顯示當前元素的位置和名稱\nprint("The element in position " + str(i) + " is " + animals[i])\n\n# 定義你希望看到的動物\nwanted_to_see = "penguin"\n\n# 再次遍歷動物列表，尋找是否有你想看到的動物\nfor i in range(0, len(animals)):\n# 如果當前動物是你想看到的動物\nif animals[i] == wanted_to_see:\n# 顯示你看到了該動物，並且這正是你想看到的動物\nprint("I saw a " + animals[i] + " and I really wanted to see it!")\n# 如果當前動物不是你想看到的動物\nelse:\n# 顯示你看到了這隻動物\nprint("I saw a " + animals[i]) \n 第十題 \n 10_for_search \n 說明： \n 設定變數來篩選出滿足條件的項目 \n 程式語法： \n 取得字串長度( len ) \n 不等於( != ) \n 等於( == ) \n 小於( < ) \n 大於( > ) \n 小於等於( <= ) \n 大於等於( >= ) \n 第十題程式碼範例 \n # 定義包含配件名稱的列表\naccessories = ["belt", "hat", "gloves", "sunglasses", "ring"]\n# 輸出配件列表\nprint(accessories)\n\n# 遍歷配件列表，顯示每個配件及其位置\nfor i in range(len(accessories)):\n    print("The element " + accessories[i] + " is in position " + str(i))\n\n# 遍歷配件列表，找出字串長度為 6 的配件\nfor i in range(len(accessories)):\n    if len(accessories[i]) == 6:\n        print("The element " + accessories[i] + " is in position " + str(i) + " and it has 6 characters")\n\n# 遍歷配件列表，找出字串長度小於 6 的配件\nfor i in range(len(accessories)):\n    if len(accessories[i]) < 6:\n        print("The element " + accessories[i] + " is in position " + str(i) + " and it has less than 6 characters")\n\n# 設定字串長度的閾值為 6，遍歷配件列表，找出字串長度大於 6 的配件\nn_of_characters = 6\nfor i in range(len(accessories)):\n    if len(accessories[i]) > n_of_characters:\n        print("The element " + accessories[i] + " is in position " + str(i) + " and it has more than " + str(n_of_characters) + " characters")\n\n# 遍歷配件列表，找出字串長度不等於 6 的配件\nn_of_characters = 6\nfor i in range(len(accessories)):\n    if len(accessories[i]) != n_of_characters:\n        print("The element " + accessories[i] + " is in position " + str(i) + " and it has a number of characters different from " + str(n_of_characters))\n\n# 設定位置閾值為 2，遍歷配件列表，找出位置小於或等於 2 的配件\nposition = 2\nfor i in range(len(accessories)):\n    if i <= position:\n        print("The element " + accessories[i] + " is in position " + str(i) + ", which is less than or equal to " + str(position))\n\n# 設定位置閾值為 2，遍歷配件列表，找出位置大於或等於 2 的配件\nposition = 2\nfor i in range(len(accessories)):\n    if i >= position:\n        print("The element " + accessories[i] + " is in position " + str(i) + ", which is at least " + str(position)) \n \n 程式碼 \n \n 解題過程與心得: \n 今天我們使用Python來輸出文字， Python的語法比較直白， Python 的 print() 函式是一個基礎又強大的工具，無論是要顯示簡單的訊息，還是格式化輸出複雜的資料，都可以輕鬆實現。我還學習到了如何用for迴圈來排列要輸出的資料。 \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13', 'text': '', 'tags': '', 'url': 'w13.html'}, {'title': 'w13_hw', 'text': '\n \n \n \n  啟動Brython  \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 外框： \n 外框程式碼 \n \n 上色： \n 上色程式碼 \n \n 作業心得： \n 通過具體的條件問題問chetgpt，來逐步得到更完整、更符合題目所需的程式，過程中可能會應為提問不夠具體或不完整導致chetgpt給出的程式沒有到達預期的效果。 \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': '請根據兩個圓繪圖所圍成的 區域 (目前圍成三個區域, 但若圓心移動可能彼此獨立)進行不同顏色著色, 條件是當各圓半徑與圓心座標變動時, 程式只需輸入兩個圓的圓心座標與半徑, 就可以完成各區域的著色任務。 \n 程式範例 \n from browser import html\nfrom browser import document as doc\nimport random\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    # 創建 canvas 並設置寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n    \n    # 獲取 canvas 的 2D 上下文\n    ctx = canvas.getContext("2d")\n    \n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    # 初始化畫布\n    canvas, ctx = initialize_canvas(400, 400)\n    \n    # 清除畫布\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n    \n    # 顏色區域存儲\n    color_dict = {}\n\n    # 使用掃描線方法填充區域\n    for py in range(0, canvas.height):\n        # 逐行掃描，判斷每個點是否在圓內\n        current_color = None  # 當前掃描線區域的顏色\n        for px in range(0, canvas.width):\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n            \n            if in_circle1 and in_circle2 and in_circle3:\n                # 三個圓的交集區域\n                if "intersection" not in color_dict:\n                    color_dict["intersection"] = random_color_generator()\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 只有圓1和圓2的交集\n                if "circle1_circle2" not in color_dict:\n                    color_dict["circle1_circle2"] = random_color_generator()\n                current_color = color_dict["circle1_circle2"]\n            elif in_circle2 and in_circle3:\n                # 只有圓2和圓3的交集\n                if "circle2_circle3" not in color_dict:\n                    color_dict["circle2_circle3"] = random_color_generator()\n                current_color = color_dict["circle2_circle3"]\n            elif in_circle1 and in_circle3:\n                # 只有圓1和圓3的交集\n                if "circle1_circle3" not in color_dict:\n                    color_dict["circle1_circle3"] = random_color_generator()\n                current_color = color_dict["circle1_circle3"]\n            elif in_circle1:\n                # 只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 點不在三個圓內，畫外區域\n                current_color = "white"  # 背景色白色\n\n            # 填充顏色\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n\n# 直接設定圓心和半徑\nx1, y1, r1 = 150, 200, 100  # 圓1：圓心 (150, 200)，半徑 100\nx2, y2, r2 = 250, 200, 100  # 圓2：圓心 (250, 200)，半徑 100\nx3, y3, r3 = 200, 100, 100  # 圓3：圓心 (200, 100)，半徑 100\n\n# 呼叫畫圓函式\ndraw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3) \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '題目一 ： \n 請利用 Gist 與 Brython 程式環境, 在個人的課程網站中新增一個頁面, 標題為 w15, 以"從 1 累加到 100"作為 anchor 的連結標題, 使用者點擊該連結之後, 可從各自的 Brython 頁面執行程式。 \n 從 1 累加到 100 \n 設計思考： \n \n 初始化總和：用一個變數來儲存累加的結果。變數一開始是 0，因為累加操作是從零開始的。 \n 累加過程：使用  for  迴圈來遍歷從 1 到 100 的所有整數，並將它們加到總和中。 \n 顯示結果：將累加的結果輸出到螢幕上，告訴使用者總和是多少。 \n \n 執行過程： 執行時，程式會從 1 開始，逐一將每個數字加到  total  中。這樣當  i  從 1 迴圈到 100 時， total  就會累加所有數字的和。當迴圈結束時， total  的值為 5050（1 + 2 + 3 + ... + 100）， 並將這個結果顯示出來。 \n # 初始化總和，設定為 0\ntotal = 0\n\n# 使用 for 迴圈從 1 累加到 100\nfor i in range(1, 101):\n    # 將當前的數字 i 加到 total 中\n    total += i\n\n# 顯示結果，輸出從 1 到 100 累加的總和\nprint("從 1 累加到 100 的總和是:", total)\n \n 題目二： 延伸上題, 設計一個函式 addto(1, 100), 可以完成上述的累加結果。(以"addto"作為連結標題) \n addto 設計思考： 這段程式的目的是設計一個函式  addto(start, end) ，它能夠計算並返回從  start  到  end  之間所有數字的總和。 利用循環來進行累加，這樣的設計可以使得我們對任何範圍的數字進行總和計算，而不僅限於從 1 到 100。 執行過程： 我們首先需要初始化一個總和變數  total ，並將其設為 0。 接著通過  for  迴圈遍歷從  start  到  end （包含  end ）的所有數字，每次迴圈都將當前的數字加到  total 。 當迴圈結束時， total  將儲存範圍內所有數字的總和，我們會將這個值返回。 呼叫該函式來計算範圍內的總和並顯示結果。 \n # 定義函式 addto，接受兩個參數 start 和 end\ndef addto(start, end):\n    # 初始化總和，設為 0\n    total = 0\n    \n    # 使用 for 迴圈從 start 累加到 end (包含 end)\n    for i in range(start, end + 1):\n        # 每次將當前數字 i 加到 total\n        total += i\n    \n    # 返回累加的結果 total\n    return total\n\n# 呼叫 addto 函式，計算從 1 到 100 的總和，並將結果儲存到 result 變數中\nresult = addto(1, 100)\n\n# 顯示結果，輸出從 1 到 100 的總和\nprint("從 1 累加到 100 的總和是:", result) \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};