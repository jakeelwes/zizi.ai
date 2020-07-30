for f in *zizi.mov
     ffmpeg -y -an -i $f -b 4000k -vcodec libx264 -pix_fmt yuv420p -strict -2 (basename $f .mov).mp4
end

for f in *pose.mov
     ffmpeg -y -an -i $f -b 2500k -vcodec libx264 -pix_fmt yuv420p -strict -2 (basename $f .mov).mp4
end



# could do '-crf 20' instead of '-b'
# Constant rate factor (CRF) is an encoding mode that adjusts the file data rate up or down to achieve a selected quality level rather than a specific data rate. 