#!/usr/bin/env python

# -*- coding=utf-8 -*-
import os
from PIL import Image,ImageStat

BASE_DIR = '/Users/yuta_mizushima/Develop/ymizushi/artihata/resources/public/img/emoji/'

for file_name in os.listdir(BASE_DIR):
    if file_name[-3:] ==  'png':
        image = Image.open(BASE_DIR+file_name)
        stat = ImageStat.Stat(image)
        if len(stat.mean) == 4:
            print '"' + file_name + '"' + ' : [' + str(int(stat.mean[0])) + ', ' + str(int(stat.mean[1])) + ', ' + str(int(stat.mean[2])) + ', ' + str(int(stat.mean[3])) + '],'

