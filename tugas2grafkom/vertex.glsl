precision mediump float;
attribute vec2 vPosition;

uniform float sudut;
uniform float scale;

void main() {

  gl_Position = vec4(vPosition, 0.0, 1.0); //wajib diisi
  mat4 rotasi = mat4(
    cos(sudut), -sin(sudut), 0.0, 0.0,
    sin(sudut), cos(sudut), 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );

  mat4 translasi = mat4(
    1.0, 0.0, 0.0, -0.25,   // dx = 0.5
    0.0, 1.0, 0.0, -0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * translasi;

  mat4 skalasi = mat4(
    scale, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * skalasi;

  mat4 translasi2 = mat4(
    1.0, 0.0, 0.0, 0.25,   // dx = 0.5
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * translasi2;


}
